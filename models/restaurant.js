const Sequelize = require('sequelize');
const db = require('./_db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    set: function(value) {
      var cuisineArray;
      if (typeof value === 'string') {
        cuisineArray = value.split(',').map((el) => {
          return el.trim()
        })
        this.setDataValue('cuisine', cuisineArray)
      } else {
        this.setDataValue('cuisine', value)
      }
    }
  },
  price: {
    type: Sequelize.INTEGER
  }
})

module.exports = Restaurant
