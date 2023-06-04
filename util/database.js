const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Javascript@321', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
