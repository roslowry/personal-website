const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = process.env.port || 3000;

app.use(session({
  secret: 'tongiscool', // or whatever you like
  resave: false,
  saveUninitialized: false
}));
app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, './public')));

// app.use(express.static('./public'))
app.use(bodyParser.json());
// the extended: true noted below allows the values within the body to be included as strings, arrays, and other forms, rather than just strings and arrays.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(){
  console.log(`The server is listening on port ${port}`)
})

app.use('/donkeyface', function (req, res, next){
  console.log('hit the api use route')
  if (!req.session.counter) req.session.counter = 0;
  req.session.counter+= 1;
  console.log('req.session.counter', req.session.counter)
  next();
})

app.use('/api', require('./server/api'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './browser/index.html'))
})

app.use(function(err, req, res, next){
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})


// app.use(function(req, res, next){
//   const err = new Error('This path doesn\'t exist. Sorry, yo.');
//   err.status= 404;
//   res.status(err.status).send(err.message)
// })
