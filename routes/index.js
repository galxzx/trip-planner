const express =require('express');
const router = express.Router();

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next){
  var outerScopeContainer = {};

var dbRestaurants = Restaurant.findAll()
var dbHotels = Hotel.findAll()
var dbActivities = Activity.findAll()

  Promise.all([dbRestaurants,dbHotels, dbActivities])
  .then(function (data) {
    res.render('index', {
      templateHotels: data[1],
      templateRestaurants: data[0],
      templateActivities: data[2]
    });
  })
  .catch(next);


});

module.exports = router;
