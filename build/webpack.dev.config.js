const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = require('./webpack.base.config')
const SRC_PATH = path.resolve(__dirname, '../src')
const ASSETS_BUILD_PATH = path.resolve(__dirname, '../dist')

const config = merge(base, {
	mode: 'development',
	context: SRC_PATH,
	entry: {
    bundle: './index.js',
	},
	output: {
		path: ASSETS_BUILD_PATH,
		filename: 'bundle.[hash: 8].js'
		// chunkFilename: 'bundle.[hash: 8].js'
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
				process.env.NODE_ENV || 'development'
			)
		}),
		new webpack.HotModuleReplacementPlugin(),
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
		})
	]
})

// 配置不用被打包的模块
// config.externals = {
//   'react': 'React',
//   'react-dom': 'ReactDOM'
// }

// 输出文件的性能检查配置
// config.performance = {
//   // 有性能问题时输出警告
//   hints: 'warning'
// }

// 包含有用的文件路径信息到生成的代码里
config.output.pathinfo = true
// 浏览器开发者工具里显示的源码模块名称
config.output.devtoolModuleFilenameTemplate = 'webpack:///[resource-path]'

// 配置source-map类型
config.devtool = 'source-map'

// 控制台输出日志控制
config.stats = {
	assets: true,
	colors: true,
	errors: true,
	errorDetails: true,
	hash: true
}

// 添加 webpack-dev-server 相关的配置项
config.devServer = {
	compress: true,
	contentBase: SRC_PATH,
	host: '0.0.0.0',
	port: 8000,
	inline: true,
	hot: true,
	historyApiFallback: true,
	// 启用https
	// https: true,
	// 监听模式选项
	watchOptions: {
		ignored: /node_modules/,
		// 监听到变化后等300ms再执行
		// aggregateTimeout: 300,
		// 每秒询问1000次指定的文件有没有变化
		poll: 1000
	}
}

module.exports = config
