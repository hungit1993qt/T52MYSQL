const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const routes = require("./routes/Router.js");


app.use("/products", routes);
app.listen(PORT, () => {
  console.log("Server ís running");
});
