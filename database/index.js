const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");
const connection = new Sequelize(dbConfig.DB);
try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.log("Unable to connect to the database: ", error);
}
