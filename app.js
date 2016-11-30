var http = require("http");
var express = require("express");
var exphbs = require('express-handlebars');

var path = require("path"); //如果有请求样式或者js，都设置好前面的路径
var bodyParser = require("body-parser");
var formidable = require('formidable');
var moment = require("moment");
var busboy = require('connect-busboy');
var multiparty = require('multiparty');
var cookieParser = require("cookie-parser");

var PORT = process.env.PORT || 3003; //process是个全局变量bodyParser
var app = express(); //启动一个外围服务器
app.locals.moment = moment;

app.use(bodyParser());

var db = require('./models');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'bower_components')));
// 使用静态资源

app.use(express.static(__dirname + '/'));

app.use(cookieParser());

/*app.use(bodyParser.json({
	limit: '1mb'
})); //body-parser 解析json格式数据

app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
	extended: true
}));*/

/*app.use(function(req, res, next) {
	console.log("公用的中间件");
	if(!req.cookies) {
		res.send({
			status: -1
		});
	} else {
		next();
	}
});*/

/*引入路由*/
const index = require("./routes/index");
const topicList = require("./routes/topic/list");
const topicAdd = require("./routes/topic/add");
const topicUpdate = require("./routes/topic/update");
const topicDelete = require("./routes/topic/delete");

//admin dog

const zipAdd = require("./routes/dog/zipAdd");
const dogList = require("./routes/dog/list");
const dogAdd = require("./routes/dog/add");
const dogUpdata = require("./routes/dog/updata");
const dogDelete = require("./routes/dog/delete");
const dogDetail = require("./routes/dog/detail");
const dogExamine = require("./routes/dog/examine");
const wasExamine = require("./routes/dog/wasExamine");

//admin web
const webList = require("./routes/web/list");
const commentZip = require("./routes/web/comment");

//user
const loginIn = require("./routes/user/loginIn");
const loginOut = require("./routes/user/loginOut");
const register = require("./routes/user/register");
/*app.get("/topic/list",,topicList);
app.post("/topic/add", topicAdd);
app.put("/topic/update/:id", topicUpdate);
app.delete("/topic/delete/:id", topicDelete);*/
//路由

var cb0 = function(req, res, next) {
	/*if(req.cookies.user_limit && req.cookies.user_limit == 1) {
		console.log("普通用户");
		next();
	} else if(req.cookies.user_limit && req.cookies.user_limit == 2) {
		console.log("管理员");
		next();
	} else {
		res.send({
			status: -1
		});
	}*/
	next();
}
app.get("/", cb0, index);

//admin 后台路由接口
app.get("/admin/dog/list", cb0, dogList);
app.post("/admin/dog/add", cb0, dogAdd);

app.post("/admin/zip/add", cb0, zipAdd);
app.post("/admin/dog/updata", cb0, dogUpdata);
app.post("/admin/dog/delete/:id", cb0, dogDelete);
app.post("/admin/dog/detail/:id", cb0, dogDetail);
//审核
app.post("/admin/dog/examine/:id", cb0, dogExamine);
app.post("/admin/dog/wasExamine/:id", cb0, wasExamine);

app.post("/admin/user/register", register);
app.post("/admin/user/loginIn", loginIn);
app.get("/admin/user/loginOut", loginOut);

//web 前台接口

app.get("/web/dog/list", webList);
app.get("/web/dog/comment", commentZip);

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

//web路由接口
db.sequelize
	.sync()
	.then(function() {
		app.listen(PORT, function() {
			console.log('Express server listening on port ' + PORT);
		});
	}).catch(function(e) {
		throw new Error(e);
	});