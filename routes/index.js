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
  .then(([restaurants, hotels, activities]) => {
    res.render('index', {
      templateHotels: restaurants,
      templateRestaurants: hotels,
      templateActivities: activities
    });
  })
  .catch(next);



});

module.exports = router;
