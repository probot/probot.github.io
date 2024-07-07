import * as fs from "fs";
import * as path from "path";

export default {
    findFileUrl(url, ctx) {
      let originalFile = ctx.containingUrl.pathname;
      let resolvedUrl = path.resolve(path.dirname(originalFile), url);
      if (fs.existsSync(resolvedUrl)) {
        return new URL(`file://${resolvedUrl}`);
      } else {
        let nodeModulePath = path.resolve("node_modules", url);
        if (fs.existsSync(nodeModulePath)) {
          return new URL(`file://${nodeModulePath}`);
        } else if (fs.existsSync(nodeModulePath + ".scss")) {
          return new URL(`file://${resolvedUrl}.scss`);
        } else if (fs.existsSync(nodeModulePath + ".css")) {
          return new URL(`file://${nodeModulePath}.css`);
        } else {
          throw new Error(`File not found: ${url}`);
        }
      }
    },
};
