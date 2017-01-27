const Sequelize = require('sequelize');
const db = require('./_db')

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    set: function(value) {
      var amenitiesArray;
      if (typeof value === 'string') {
        amenitiesArray = value.split(',').map((el) => {
          return el.trim()
        })
        this.setDataValue('amenities', amenitiesArray)
      } else {
        this.setDataValue('amenities', value)
      }
    }
  }
})

module.exports = Hotel