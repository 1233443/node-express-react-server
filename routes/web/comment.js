var express = require('express');
var router = express.Router();
var db = require('../../models');

router.post('/web/dog/comment', function(req, res, next) {
	res.send({
		status: 0,
		desc: "修改成功"
	})
});
module.exports = router;