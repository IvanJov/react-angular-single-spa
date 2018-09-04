const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
	entry: {
		'root-application': 'src/root-application/root-application.js',
		'common-dependencies': [
			'core-js/client/shim.min.js',
			'@angular/common',
			'@angular/compiler',
			'@angular/core',
			'@angular/platform-browser-dynamic',
			'@angular/router',
			'reflect-metadata',
			'react',
			'react-dom',
		],
	},
	output: {
		publicPath: '/dist/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common-dependencies',
		}),
		new ContextReplacementPlugin(
			/(.+)?angular(\\|\/)core(.+)?/,
			path.resolve(__dirname, '../src')
			)
	],
	devtool: 'source-map',
	externals: [
	],
};
