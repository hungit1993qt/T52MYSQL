const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const bannerRoutes = require("./routes/banner.js");
const partnerRoutes = require("./routes/partner");
const storeRoutes = require("./routes/store");
const mediaRoutes = require("./routes/medias");
const newsRoutes = require("./routes/news");
const uploadImagesRoutes = require("./routes/uploadImages");

app.use(express.static(__dirname + "/"));
app.use("/banner", bannerRoutes);
app.use("/partner", partnerRoutes);
app.use("/store", storeRoutes);
app.use("/media", mediaRoutes);
app.use("/news/", newsRoutes);
app.use("/upload-images/", uploadImagesRoutes);
app.get("/", (req, res) => {
  res.status(200).json("welcom to API");
});

app.listen(PORT, (req, res) => {
  console.log("Server ís running");
});
