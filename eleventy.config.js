import path from "node:path";
import fs from "node:fs/promises"
import { DateTime } from "luxon";
import { fileURLToPath } from "url";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import feedPlugin from "@11ty/eleventy-plugin-rss";
import htmlmin from "html-minifier-terser";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default async function(eleventyConfig) {
	
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("html"); 
	eleventyConfig.addBundle("js");
	eleventyConfig.addBundle("svg");
	
	eleventyConfig.addFilter('collectionLastUpdatedDate', (collection) => {
		  if (!collection || !collection.length) { throw new Error('Collection is empty in collectionLastUpdatedDate filter.'); }
		  return (new Date( Math.max(...collection.map((item) => { return item.date; }))));
	});
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});
	eleventyConfig.addFilter("readableDate", (dateObj) => {
  		return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale('en').toLocaleString(DateTime.DATE_MED);
	});
	
	eleventyConfig.addGlobalData('header', 'true'); //?
	eleventyConfig.addGlobalData('layout', 'page');
	eleventyConfig.addGlobalData("permalink", () => { 
		return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
	});
	
	eleventyConfig.addLiquidFilter("dateToRfc822", feedPlugin.dateToRfc822);
	eleventyConfig.addLiquidFilter("dateToRfc3339", feedPlugin.dateToRfc3339);
	eleventyConfig.setLiquidOptions({ dynamicPartials: true });
	
	eleventyConfig.addPassthroughCopy('source/_headers');
	eleventyConfig.addPassthroughCopy('source/_redirects');
	eleventyConfig.addPassthroughCopy('source/assets');
	eleventyConfig.addPassthroughCopy('source/functions');
	
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addShortcode("now", () => `${DateTime.now().setLocale('en').toLocaleString(DateTime.DATE_FULL)}`);
	eleventyConfig.addShortcode("insert", function(file) {
		var data = fs.readFile(__dirname + "/source" + file, { encoding: 'utf8' });
		return (data);
	});
	
	eleventyConfig.addTransform("minify", function (content) {
		
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				removeComments: true,
				useShortDoctype: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true
			});
			return minified;
		}
		
		if ((this.page.outputPath || "").endsWith(".json")) {
			let minified = htmlmin.minify(content, {
				collapseWhitespace: true,
				minifyJS: true
			});
			return minified;
		}
		
		return content;
	});
	
	eleventyConfig.addUrlTransform((page) => {
		let extension = ".html";
		if (page.url.endsWith(extension)) {
			return page.url.slice(0, -1 * extension.length);
		}
	});

	eleventyConfig.setServerOptions({
		encoding: "utf-8",
		domDiff: true,
		liveReload: true,
		showAllHosts: true
	});
	
	eleventyConfig.setBrowserSyncConfig({
		middleware: [
			function (req, res, next) {
				if (/^[^.]+$/.test(req.url)) { res.setHeader('Content-Type', 'text/html; charset=utf-8'); }
				next();
			}
		]
	});
	
	eleventyConfig.setTemplateFormats([ "liquid", "html",  "svg", "webp", "jpg", "png", "apng", "avif",  "gif" ]);
	eleventyConfig.setQuietMode(true);
	return {
		dir: {
			input: "source",
			data: 'elements/data',
			includes: 'elements/includes',
			layouts: 'elements/templates',
			output: "build"
		}
	};
};