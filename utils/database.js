const Sequelize = require('sequelize');
const {DB_NAME, USER_NAME, PASSWORD, HOST, DIALECT} = require('../keys');

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT
});

module.exports = sequelize;