const Sequelize = require('sequelize');

const sequelize = new Sequelize('chocolates', 'root', 'Motive@358', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;