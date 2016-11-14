var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var unzip=require("unzip");
var db = require('../../models');
var multiparty = require('multiparty');

router.post('/zip/add', function(req, res, next) {
	console.log("aa");
	console.log("bb");
	var form = new multiparty.Form({uploadDir: './uploads'});
	form.parse(req, function(err, fields, files) {
		var filesTmp = JSON.stringify(files);
		if(err) {
			console.log('parse error: ' + err);
		} else {
			var inputFile = files.file;
			console.log(inputFile);
			var uploadedPath = inputFile[0].path;
			var originalFilename=inputFile[0].originalFilename;
			var random=new Date().getTime();//生成一个随机数
			var fileName=random+originalFilename.replace(/.zip$/,"");
			
			var dstPath = './uploads/'+random+originalFilename;
			fs.renameSync(uploadedPath, dstPath); //同步
			fs.createReadStream(dstPath).pipe(unzip.Extract({ path: 'output/path/'+fileName }));
			res.send({status:0,url:'output/path/'+fileName});
		}
	});	
});

module.exports = router;