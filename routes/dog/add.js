var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/dog/add', function(req, res, next) {
	var body=req.body;
	console.log(body);
	/*db.topic.create({
		topicName: req.body.topicName,
		yinpin: req.body.pinyin
	});*/
	res.send({
		status: 0,
	});
});

module.exports = router;