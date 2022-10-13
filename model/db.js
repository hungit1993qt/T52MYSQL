const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorAlias: false,
  logging: false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

db.authenticate()
  .then(() => {
    console.log("Connected ...");
  })
  .catch((err) => {
    console.log("Error " + err);
  });

module.exports = db;
