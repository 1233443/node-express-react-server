var express = require('express');
var router = express.Router();
var db = require('../../models');
router.put('/dog/update/:id', function(req, res, next) {
	db.topic.findAll({
		order: '"updatedAt" DESC'
	}).then(function(data) {
		res.send({
			status: 0,
			result: data
		});
	});
	
	/*
	 var pram={'userName':'晓博'};  
	user.update(pram,{  'where':{'userId':{eq:23}}  }  );
	将userId等于23的userName改为'晓博'
	 * */
});

module.exports = router;