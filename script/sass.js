const sass = require("sass");
const fs = require("fs");

const result = sass.renderSync({
  file: "assets/sass/styles.scss",
  includePaths: ["node_modules"],
  outputStyle: "compressed",
});

fs.writeFileSync("assets/dist/styles.css", result.css.toString());
