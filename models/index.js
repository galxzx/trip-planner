const db = require('./_db')

const Place = require('./place.js')
const Restaurant = require('./restaurant')
const Activity = require('./activity')
const Hotel = require('./hotel')

Hotel.belongsTo(Place)
Activity.belongsTo(Place)
Restaurant.belongsTo(Place)


module.exports = db
