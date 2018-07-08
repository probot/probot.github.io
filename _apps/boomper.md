---
title: Boomper
description: Bump version numbers in files whenever new releases are published.
slug: boomper-bot
screenshots:
- https://raw.githubusercontent.com/toolmantim/boomper/master/design/screenshot.png
authors: [ toolmantim ]
repository: toolmantim/boomper
host: https://boomper.now.sh
---

## Usage

Firstly, you’ll need to install the [Boomper GitHub App](https://github.com/apps/boomper-bot). This listens out for any releases, or any changes to the configuration.

Then, add a `.github/boomper.yml` configuration file to the GitHub repository where you publish new releases to.

For example, given the following `.github/boomper.yml` file:

```yml
updates:
- path: README.md
  pattern: 'https://someurl.com/(v.*)/download.zip'
```

And given the following `README.md` file:

```markdown
Install with `curl https://someurl.com/v1.0.0/download.zip`
```

Then when a new release is published (e.g. `v2.0.0`), Boomper will update the `README.md` to:

```markdown
Install with `curl https://someurl.com/v2.0.0/download.zip`
```

## Examples

### [Buildkite Plugin Readmes](https://buildkite.com/docs/agent/v3/plugins)

```yml
updates:
- path: README.md
  pattern: 'my-org/my-plugin#(v.*):'
```

## Configuration options

You can configure Boomper using the following key in your `.github/boomper.yml` file:

|Key|Required|Description|
|-|-|-|
|`updates`|Required|A list of paths and patterns to update when a new release is published.|
|`updates.[].path`|Required|The path to the file to update.|
|`updates.[].pattern`|Required|The regular expression containing a single group, which will be used to match and update the version number in the file.|
|`updates.[].branch`|Optional|The branch to update. Default is the repository's default branch (e.g. `master`).|
|`branches`|Optional|The branches to listen for configuration updates to `.github/boomper.yml`. Useful if you want to test the app on a pull request branch. Default is `"master"`.|

Boomper also supports [Probot Config](https://github.com/probot/probot-config), if you want to store your configuration files in a central repository.
