const path = require('path')

module.exports = {
	entry : path.join(__dirname,'src/index.js'),

	output : {
		path : path.join(__dirname,'public/js'),
		filename : 'app.js'
	},

	module : {
		loaders : [
			{ test:/\.js$/, loader:'babel-loader', exclude:/node_modules/}
		]
	}
}
