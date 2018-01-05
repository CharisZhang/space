var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
/*
	模式修饰符：
	1.预定义的模式修饰符
	2.自定义setter修饰符
	3.自定义getter修饰符
	4.虚拟属性：不需要存入数据库，通过其他方法得到
	5.索引
		5.1. 唯一索引 （检查是否唯一）
		5.2. 辅助索引 （为了增加查询速度）
 */
var UserSchema = new mongoose.Schema({
	userName: {
		type: String,
		match: /^[0-9a-zA-Z_]{1,}$/,
		unique: true,
		required: true,
		validate: function(desc) {
			return desc.length >= 2 && desc.length <= 10;
		}
	},
	password: {
		type: String,
		required: true,
		validate: function(desc) {
			return desc.length >= 6 && desc.length <= 20;
		}
	},
	createTime: Date,
	lastLogin: {
		type: Date,
		default: Date.now()
	}
})
mongoose.model('User',UserSchema);