var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/admin/dog/updata', function(req, res, next) {
	var id = req.body.id;

	db.package.find({
		where: {
			id: id
		}
	}).then(function(result) {
		if(result) {
			result.updateAttributes({
				title: req.body.zipName,
				description: req.body.zipDesc,
				url: req.body.zipPackage
			}).then(function(data) {
				res.send({
					status: 0,
					desc: "修改成功"
				})
			});
		}
	});
});
module.exports = router;