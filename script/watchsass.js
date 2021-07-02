const fs = require('fs');
const sass = require('sass');

const result = sass.renderSync({
    file: "assets/sass/styles.scss",
    includePaths: ["node_modules"],
    outputStyle: "compressed"
});

fs.writeFileSync("assets/dist/styles.css", result.css.toString());

console.log(`Watching for file changes in assets/sass`);

fs.watch("assets/sass", () => {
    const result = sass.renderSync({
        file: "assets/sass/styles.scss",
        includePaths: ["node_modules"],
        outputStyle: "compressed"
    });

    fs.writeFileSync("assets/dist/styles.css", result.css.toString());
});