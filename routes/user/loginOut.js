var express = require('express');
var router = express.Router();
var db = require('../../models');

router.get('/admin/user/loginOut', function(req, res, next) {
	/*db.topic.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});*/
	
	res.send("bbb");
});

module.exports = router;