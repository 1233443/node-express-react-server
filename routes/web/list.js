var express = require('express');
var router = express.Router();
var db = require('../../models');

router.get('/web/dog/list', function(req, res, next) {
	db.package.findAll({
		'where': {
			"status": 1
		}
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});
});

module.exports = router;