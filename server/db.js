var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const mongoPath = 'mongodb://localhost:27017/space'
// 导出mongoose 配置
module.exports = function() {
	var db = mongoose.connect(mongoPath,{
		useMongoClient: true,
	});
	require('./models/user.server.model.js')
	require('./models/sort.server.model.js')
	return db;
}
