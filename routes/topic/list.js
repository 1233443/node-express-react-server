var express = require('express');
var router = express.Router();
var db = require('../../models');

router.get('/topic/list', function(req, res, next) {
	db.topic.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});
});

module.exports = router;