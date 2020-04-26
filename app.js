//Baza danych
const mongoose = require('mongoose') //dostęp do bazy i operacje bezdanowe
require('dotenv').config()  // obsługa pliku konfiguracyjnego .env


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var list = require('./routes/trainingsList');
var registration = require('./routes/registrationFile');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/registrationFile', registration )////!!!!!
app.use('/trainingsList', list)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


//BD
mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true}) 
const dbConnection = mongoose.connection //zapisujemu connection do stalej dla dalszych operacji
dbConnection.on('error', (error) => console.error(error)) //reakcja na dowolny blad
dbConnection.once('open', ()=> console.log('Połączono z baza danych')) // w momncie nawiazania polaczenia wykonaj funkcję 


module.exports = app;
