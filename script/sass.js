const sass = require("sass");
const fs = require("fs");

const result = sass.renderSync({
  file: "assets/sass/styles.scss",
  includePaths: ["node_modules"],
  outputStyle: "compressed",
});

fs.mkdirSync("assets/dist");
fs.writeFileSync("assets/dist/styles.css", result.css.toString());
