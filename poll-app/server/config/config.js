const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('poll_app', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
