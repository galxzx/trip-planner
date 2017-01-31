const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const path = require('path')

const models = require('./models');
const Place = models.Place;
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(volleyball)

var env = nunjucks.configure('views', {noCache: true});

//routes
app.use(express.static('public'));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jQuery', express.static(path.join(__dirname,'node_modules/jquery/dist')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
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
