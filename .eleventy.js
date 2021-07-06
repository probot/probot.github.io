const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {Liquid} = require("liquidjs");
const markdownIt = require("markdown-it");

function watchAndPass(file, config) {
    config.addWatchTarget(file);
    config.addPassthroughCopy(file);
}
module.exports = function (eleventyConfig) {
    watchAndPass("./assets/js", eleventyConfig);
    watchAndPass("./assets/dist", eleventyConfig);
    watchAndPass("./assets/img", eleventyConfig);
    watchAndPass("./api", eleventyConfig);
    watchAndPass("./favicon.ico", eleventyConfig);
    watchAndPass("./favicon-16x16.png", eleventyConfig);
    watchAndPass("./favicon-32x32.png", eleventyConfig);
    watchAndPass("./android-chrome-192x192.png", eleventyConfig);
    watchAndPass("./android-chrome-256x256.png", eleventyConfig);
    watchAndPass("./safari-pinned-tab.svg", eleventyConfig);
    watchAndPass("./apple-touch-icon.png", eleventyConfig);
    eleventyConfig.addWatchTarget("./docs");

    eleventyConfig.addPlugin(syntaxHighlight);

    // Reduce HTML output size
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( this.outputPath && this.outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
    
        return content;
    });

    eleventyConfig.addCollection("apps", function(collectionApi) {
        return collectionApi.getFilteredByGlob("_apps/*.md").sort((a, b) => b.data.starts - a.data.starts);
    });

    eleventyConfig.addCollection("docs", function(collectionApi) {
        return collectionApi.getFilteredByGlob("_docs/*.md");
    });

    // Pass custom options to liquid
    let options = {
        extname: ".liquid",
        dynamicPartials: true,
        strict_filters: true,
        root: ["_includes"]
    };
    const liquid = new Liquid(options);
    liquid.registerTag('octicon', require("./js/octicons-liquid/tag.js"));
    eleventyConfig.setLibrary("liquid", liquid);

    // Customize markdown-it settings
    let markdown = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });

    eleventyConfig.addFilter('markdown', function(value) {
        return markdown.render(value);
    });

    eleventyConfig.setLibrary("md", markdown);

    // Speed up dev builds by not watching JS deps for changes
    eleventyConfig.setWatchJavaScriptDependencies(false);

	return {
		passthroughFileCopy: true,
        dir: {
            layouts: "_layouts"
        }
	}
}
