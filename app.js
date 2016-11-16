var http = require("http");
var express = require("express");
var exphbs = require('express-handlebars');

var path = require("path"); //如果有请求样式或者js，都设置好前面的路径
var bodyParser = require("body-parser");
var formidable = require('formidable');
var moment = require("moment");
var busboy = require('connect-busboy');
var multiparty = require('multiparty');
var PORT = process.env.PORT || 3003; //process是个全局变量bodyParser
var app = express(); //启动一个外围服务器
app.locals.moment = moment;


//app.use(busboy());
app.use(bodyParser());
//app.use(bodyParser({uploadDir:'./uploads'}));

var db = require('./models');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'bower_components')));

/*app.use(bodyParser.json({
	limit: '1mb'
})); //body-parser 解析json格式数据

app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
	extended: true
}));*/

/*引入路由*/
const index = require("./routes/index");
const topicList = require("./routes/topic/list");
const topicAdd = require("./routes/topic/add");
const topicUpdate = require("./routes/topic/update");
const topicDelete = require("./routes/topic/delete");

//dog

const zipAdd = require("./routes/dog/zipAdd");
const dogList = require("./routes/dog/list");
const dogAdd = require("./routes/dog/add");
const dogUpdata = require("./routes/dog/updata");
const dogDelete = require("./routes/dog/delete");
const dogDetail = require("./routes/dog/detail");

//user

const loginIn = require("./routes/user/loginIn");
const loginOut = require("./routes/user/loginOut");
const register = require("./routes/user/register");

//路由

app.get("/", index);
app.get("/topic/list", topicList);
app.post("/topic/add", topicAdd);
app.put("/topic/update/:id", topicUpdate);
app.delete("/topic/delete/:id", topicDelete);


//admin 后台路由接口
app.get("/admin/dog/list", dogList);
app.post("/admin/dog/add", dogAdd);
app.post("/admin/zip/add", zipAdd);
app.post("/admin/dog/updata", dogUpdata);
app.post("/admin/dog/delete/:id", dogDelete);
app.post("/admin/dog/detail", dogDetail);

app.post("/admin/user/register", register);
app.post("/admin/user/loginIn", loginIn);
app.get("/admin/user/loginOut", loginOut);


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