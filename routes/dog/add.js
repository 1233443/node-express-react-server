var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var unzip=require("unzip");
var db = require('../../models');
var multiparty = require('multiparty');
//var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();	

router.post('/dog/add/:id', function(req, res, next) {
	var form = new multiparty.Form({
		uploadDir: './uploads'
	});
	form.parse(req, function(err, fields, files) {
		var filesTmp = JSON.stringify(files);
		if(err) {
			console.log('parse error: ' + err);
		} else {
			var inputFile = files.thumbnail;
			if(inputFile.length == 1) {
				var uploadedPath = inputFile[0].path;
				var dstPath = './uploads/' + inputFile[0].originalFilename;
			} else {
				console.log("err");
				return;
			}
			fs.renameSync(uploadedPath, dstPath); //同步
			fs.createReadStream('./uploads/tianjinwe-wztj_doc-master.zip').pipe(unzip.Extract({ path: 'output/path/tianjinwe-wztj_doc-master' }));
		}
	});
	/*db.topic.create({
		topicName: req.body.topicName,
		yinpin: req.body.pinyin
	});*/
	res.send({
		status: 0,
		x: 1,
		y: 2
	});
});

module.exports = router;