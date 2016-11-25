var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var unzip=require("unzip");
var db = require('../../models');
var multiparty = require('multiparty');

router.post('/zip/add', function(req, res, next) {
	var form = new multiparty.Form({uploadDir: './uploads'});
	form.parse(req, function(err, fields, files) {
		var filesTmp = JSON.stringify(files);
		if(err) {
			console.log('parse error: ' + err);
		} else {
			var inputFile = files.file;
			console.log(inputFile);
			if(inputFile.length == 1) {
				var uploadedPath = inputFile[0].path;
				var originalFilename=inputFile[0].originalFilename;
				var dstPath = './uploads/' +originalFilename ;
			} else {
				console.log("err");
				return;
			}
			//fs.renameSync(uploadedPath, dstPath); //同步
			//fs.createReadStream(dstPath).pipe(unzip.Extract({ path: 'output/path/' }));
			res.send({status:0,url:dstPath});
		}
	});
	/*db.topic.create({
		topicName: req.body.topicName,
		yinpin: req.body.pinyin
	});*/
});

module.exports = router;