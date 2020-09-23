// written using node.js

// use this to create an absolute path to the dist folder
const path = require("path");
// clean webpack plugin: before anything new is written to output, it clears/cleans existing output
const CleanPlugin = require("clean-webpack-plugin");

// module.rules tells webpack what to do with the files it finds.
module.exports = {
	mode: "production",
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "none",
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
	plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
