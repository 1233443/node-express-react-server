var express = require('express');
var fs = require("fs");
var router = express.Router();
var db = require('../models');

//路径整理
var path = require("path");
var normalize = path.normalize('./path//upload/data/../file/./123.jpg'); //格式化为标准的路径	path\upload\file\123.jpg
var join = path.join('./path/./', './upload', '/file', '123.jpg'); //拼接路径 path\upload\file\123.jpg
var resolve = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'); //绝对路径 ,类似cd  /tmp/subfile
var dirname = path.dirname('path/upload/file/123.jpg'); //文件路径,根据一个文件或目录得到它所在的目录路径
var basename = path.basename('path/upload/file/123.jpg', '.jpg'); //获取路径中的文件名,第二个参数表示可以忽略文件后缀  123
var extname = path.extname('path/upload/file/123.txt.jpg'); //.jpg 返回文件的后缀名
var parse = path.parse('/home/user/dir/file.txt'); //把一个路径解析为一个 {root:'', dir:'', base:'', ext:'', name:''} 这样的对象。
var format = path.format({
	root: "/",
	dir: "/home/user/dir",
	base: "file.txt",
	ext: ".txt",
	name: "file"
});

router.get('/', function(req, res, next) {
	res.render("home");
	//删除
	/*const id = 1
	db.user.findById(id).then(item => {
		item.destroy();
	});*/

	//更改
	/*var id = 1;
	db.user.findById(id).then(item => {
		item.update({
			name1: "小花"
		})
	});*/
	//创建
	/*db.user.create({
		name1: "dfc1",
		name2: "dfc2",
		name3: "dfc3"
	});*/
	//列表
	/*db.user.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});*/
});

module.exports = router;