const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/tripplanner', {logging: false});

const Place = db.define('place', {
  addres: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
