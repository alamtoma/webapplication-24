const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Poll = sequelize.define('Poll', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  options: {
    type: DataTypes.TEXT, // Vi bruker TEXT for å lagre JSON
    allowNull: false,
  },
  votes: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Poll;
