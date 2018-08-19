const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const base = require('./webpack.base.config')
const SRC_PATH = path.resolve(__dirname, '../src')
const ASSETS_BUILD_PATH = path.resolve(__dirname, '../dist')

const config = merge(base, {
	mode: 'production',
	context: SRC_PATH,
	entry: {
		app: './index',
		vendor: ['react']
	},
	output: {
		path: ASSETS_BUILD_PATH,
		filename: '[name].[chunkhash:8].js'
	},

	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader?sourceMap',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(
				process.env.NODE_ENV || 'production'
			)
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: '../src/assets/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		}),
		// 抽取 CSS 文件
		new ExtractTextPlugin({
			filename: '[name]_[contenthash: 8].css',
			allChunks: true,
			ignoreOrder: true
		})
	]
})

module.exports = config
