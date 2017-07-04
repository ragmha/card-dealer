const path = require("path");

const srcPath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "dist");

let config = {
	context: srcPath,
	entry: path.join(srcPath, "index.js"),
	output: {
		path: buildPath,
		filename: "bundle.js",
		publicPath: "/"
	},
	devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: buildPath,
		compress: true,
		port: 8000,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: { presets: ["react", "es2015"] }
			},
			{ test: /\.css$/, loaders: ["style-loader", "css-loader"] },
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.png$/,
				loader: "url-loader"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader"
			}
		]
	}
};

module.exports = config;
