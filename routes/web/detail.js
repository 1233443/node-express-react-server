var express = require('express');
var router = express.Router();
var db = require('../../models');
router.post('/admin/dog/detail/:id', function(req, res, next) {
	db.package.findAll({
		where: {
			id: req.params.id
		}
	}).then(function(data) { 
		console.log(data);
		console.log("dfc");
		     
		if(data) {
			res.send({
				status: 0,
				result: data[0]
			});
		} else {
			res.send({
				status: -1,
				desc: "未找到当前数据,不能修改"
			});
		}
	});
	/*
	 var pram={'userName':'晓博'};  
	user.update(pram,{  'where':{'userId':{eq:23}}  }  );
	将userId等于23的userName改为'晓博'
	 * */
});

module.exports = router;