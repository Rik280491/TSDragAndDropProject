// written using node.js

// use this to create an absolute path to the dist folder
const path = require("path");

// module.rules tells webpack what to do with the files it finds.
// publicPath is for the webpack dev server
module.exports = {
	mode: "development",
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "dist",
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				// regex, any file that ends in .ts
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
