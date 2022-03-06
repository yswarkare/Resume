const purgecss = {
	"@fullhuman/postcss-purgecss": {
		// Specify the paths to all of the template files in your project
		content: [
			"./components/*.jsx",
			"./container/*.jsx",
			"./pages/**/*.jsx",
			"./styles/*.css",
			"./pages/**/*.js",
			"./pages/*.js",

			// etc.
		],

		// Include any special characters you're using in this regular expression
		defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
	},
};
//const tailwindcss = require("tailwindcss");
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "postcss-loader"],
			},
			{
				test: /\.jsx?$/,
				use: ["babel-loader", "astroturf/loader"],
			},
		],
	},
	plugins: [
		require("postcss-import"),
		require("tailwindcss"),
		require("postcss-100vh-fix"),
		require("cssnano"),
		require('postcss-nested'),
		...(process.env.NODE_ENV === "production" ? [purgecss] : [""]),
	],
};
