const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var env = nunjucks.configure('views', {noCache: true});

//routes
app.use(express.static('public'));
app.use(routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next){
  res.status(err.status || 500)
  console.error(err);
  res.render('error', {err: err});
});

app.listen(3333, () => console.log('listening on 3333'));
