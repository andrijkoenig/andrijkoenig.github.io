import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		});
	eleventyConfig.addNunjucksGlobal('currentYear', new Date().getFullYear());

	// plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["avif", "webp", "auto"],
		widths: ["auto"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		}
	});

	// Filters
	eleventyConfig.addFilter("postDate", (date) => {
		return DateTime.fromJSDate(date).toFormat("MMM d, yyyy");
	});
	eleventyConfig.addFilter('isoDate', (date) => {
		return DateTime.fromJSDate(date).toISODate();
	});

	eleventyConfig.addFilter("limit", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});
}

export const config = {
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	}
}