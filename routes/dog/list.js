var express = require('express');
var router = express.Router();
var db = require('../../models');

router.get('/admin/dog/list', function(req, res, next) {
	db.package.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {

		res.send({
			status: 0,
			result: data
		});
	});
});



module.exports = router;