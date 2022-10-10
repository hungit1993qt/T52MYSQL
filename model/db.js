const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected ...");
  })
  .catch((err) => {
    console.log("Error " + err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./model")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes done");
});
module.exports = db;
