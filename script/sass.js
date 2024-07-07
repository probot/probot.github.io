import fs from "fs";
import * as sass from "sass";
import customImporter from "./sass_importer.js";

const result = sass.compileString(
  sass
    .compile("assets/sass/styles.scss", {
      importers: [customImporter],
    })
    .css.replaceAll("@import '@primer", "@use 'pkg:@primer"),
  {
    importers: [sass.NodePackageImporter()],
  }
);

fs.mkdirSync("assets/dist", {
  recursive: true,
});
fs.writeFileSync("assets/dist/styles.css", result.css);
