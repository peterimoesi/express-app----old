var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs = require('fs');
var fileName = 'C:/sites/myserver/myapp/public/json/json.json';



var sticky = require('./routes/sticky');
var register = require('./routes/register');
var mySites = require('./routes/mysites');
var ajax = require('./routes/ajax/ajax');
var snake = require('./routes/snake/snake');
var vanilla= require('./routes/vanilla');
var profile = require('./routes/profile');
var eventreg = require('./routes/eventreg/eventreg');
var home = require('./routes/home');
var summer = require('./routes/summer/summer');
var image = require('./routes/image');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/sticky', sticky);
app.use('/register', register);
app.use('/mysites', mySites);
app.use('/ajax', ajax);
app.use('/snake', snake);
app.use('/vanillaApp', vanilla);
app.use('/profile', profile);
app.use('/eventreg', eventreg);
app.use('/summer', summer);
app.use('/image', image);



app.post('/', function(req, res, next) {

  var configFile = fs.readFileSync(fileName);
  console.log(configFile);
  var config = JSON.parse(configFile);
  config.push(JSON.stringify(req.body));
  var configJSON = JSON.stringify(config);

  fs.writeFileSync(fileName, configJSON);

  var newFile = fs.readFileSync(fileName);
  console.log(JSON.parse(newFile));

 res.end(JSON.stringify(req.body));


});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
