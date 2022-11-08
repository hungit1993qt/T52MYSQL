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
const clientRoutes = require("./routes/client");
const managerRoutes = require("./routes/manager");
const uploadImagesRoutes = require("./routes/uploadImages");
const typenewsRoutes = require("./routes/typenews");
const questionRoutes = require("./routes/question");
const feedbackRoutes = require("./routes/feedback");
const menuRoutes = require("./routes/menu");
const introduceRoutes = require("./routes/introduce");
const corevalueRoutes = require("./routes/corevalue");
const futureRoutes = require("./routes/future");
const serviceRoutes = require("./routes/service");

app.use(express.static(__dirname + "/"));
app.use("/banner", bannerRoutes);
app.use("/partner", partnerRoutes);
app.use("/store", storeRoutes);
app.use("/media", mediaRoutes);
app.use("/news/", newsRoutes);
app.use("/client/", clientRoutes);
app.use("/manager/", managerRoutes);
app.use("/upload-images/", uploadImagesRoutes);
app.use("/typenews/", typenewsRoutes);
app.use("/question/", questionRoutes);
app.use("/feedback/", feedbackRoutes);
app.use("/menu/", menuRoutes);
app.use("/introduce/", introduceRoutes);
app.use("/corevalue/", corevalueRoutes);
app.use("/future/", futureRoutes);
app.use("/service/", serviceRoutes);
app.get("/", (req, res) => {
  res.status(200).json("welcom to API");
});

app.listen(PORT, (req, res) => {
  console.log("Server ís running");
});
