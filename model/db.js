const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorsAliases: false,
});

db
  .authenticate()
  .then(() => {
    console.log("Connected ...");
  })
  .catch((err) => {
    console.log("Error " + err);
  });
  

module.exports = db;
