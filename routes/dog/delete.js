var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/dog/delete/:id', function(req, res, next) {
	var id=req.params.id;
	db.package.destroy({'where':{"id":id}});
	res.send({status:0,desc:"ddd"});
	/*db.topic.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});*/
});
module.exports = router;