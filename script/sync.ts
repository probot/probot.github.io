/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Octokit } from "@octokit/rest";
import * as YAML from "yaml";
import * as fs from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

function pad(number: number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// Modified version of the toISOString polyfill from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// because I couldn't find a function which outputs the dates like it happened on ruby
// but the diff from the TS output and the ruby output should be as low as possible
declare global {
  interface Date {
    toRubyString(): string;
  }
}

Date.prototype.toRubyString = function (this: Date) {
  return (
    this.getUTCFullYear() +
    "-" +
    pad(this.getUTCMonth() + 1) +
    "-" +
    pad(this.getUTCDate()) +
    " " +
    pad(this.getUTCHours()) +
    ":" +
    pad(this.getUTCMinutes()) +
    ":" +
    pad(this.getUTCSeconds()) +
    " UTC"
  );
};

const client = new Octokit({
  auth: process.env.GITHUB_TOKEN ?? "",
});

function walk(directory: string, filepaths: string[] = []): string[] {
  const files = fs.readdirSync(directory);
  for (const filename of files) {
    const filepath = join(directory, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filepaths);
    } else if (extname(filename) === ".md") {
      filepaths.push(filepath);
    }
  }
  return filepaths;
}

const files = walk(join(__dirname, "..", "_apps"));

for (const path of files) {
  let data = "";
  try {
    try {
      // @ts-expect-error
      data = /^---(((?!---).|[\r\n])*)[\r\n]---$/m.exec(
        fs.readFileSync(path).toString(),
      )[0];
    } catch {
      console.error(`Error parsing ${path}`);
      console.log(data);
      process.exit(1);
    }
    const app = YAML.parse(data.replaceAll("---", ""));
    console.log(`Syncing ${app.title}`);

    const repoName = app.repository.split("/");
    const repo = await client.rest.repos.get({
      owner: repoName[0],
      repo: repoName[1],
    });
    app.stars = repo.data.stargazers_count;
    app.updated = new Date(repo.data.pushed_at).toRubyString();

    if (app.host) {
      const statsFromServer = await fetch(app.host + "/probot/stats");
      if (statsFromServer.status === 200) {
        const stats: Record<string, unknown> = YAML.parse(
          await statsFromServer.text(),
        );
        if (stats.popular) {
          app.organizations = (stats.popular as unknown[]).map(
            (org: any) => org.login as string,
          );
        }
      }
    }

    let content: string = fs.readFileSync(path).toString();
    content = content.replace(
      data,
      `---
${YAML.stringify(app)}---`,
    );
    fs.writeFileSync(path, content);
    console.log(`Done for ${app.title}`);
  } catch (e) {
    console.error(`Error while working on ${path}`);
    console.log("Data received");
    console.log("=============");
    console.log(data);
    console.log("Error details");
    console.log("=============");
    console.log(e);
    process.exit(1);
  }
}
