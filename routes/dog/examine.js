var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/admin/dog/examine/:id', function(req, res, next) {
	var id = req.params.id;
	db.package.find({
		where: {
			id: id
		}
	}).then(function(result) {
		if(result) {
			var status = result.dataValues.status;
			status = status == 1 ? "-1" : "1";
			console.log(status);
			result.updateAttributes({
				status: status
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