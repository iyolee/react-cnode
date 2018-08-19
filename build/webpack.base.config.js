const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const ASSETS_BUILD_PATH = path.resolve(__dirname, '../dist')

const config = {
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				// 缓存babel的编译结果
				use: ['babel-loader?cacheDirectory'],
				exclude: path.resolve(__dirname, '../node_modules')
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'images/[name].[ext][hash]'
						}
					}
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							mimetype: 'application/font-woff',
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192,
							mimetype: 'application/font-woff',
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	// 配置寻找模块的规则
	resolve: {
		// 模块的后缀名
		extensions: ['.js', '.jsx'],
		// 是否强制导入语句写明文件后缀
		enforceExtension: false
	},
	// 配置插件
	plugins: [
		// 每次打包前，先清空原来目录中的内容
		new CleanWebpackPlugin([ASSETS_BUILD_PATH], { verbose: false})
	]
}

module.exports = config
