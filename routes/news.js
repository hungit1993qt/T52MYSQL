const newsController = require("../controllers/newsController");
const upload = require("../middleware/uploadPicture");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  //   verifyToken.verifyTokenAPI,
  upload.single("img"),
  newsController.addNews
);
routes.get(
  "/",
  //   verifyToken.verifyTokenAPI,
  newsController.getAllNews
);
routes.get(
  "/detail/:id",
  //   verifyToken.verifyTokenAPI,
  newsController.findNewsDetail
);
routes.get(
  "/search-name/:key",
  //   verifyToken.verifyTokenAPI,
  newsController.findNewsByName
);
routes.get(
  "/search-type/:key",
  //   verifyToken.verifyTokenAPI,
  newsController.findNewsByType
);
routes.get(
  "/search-date/:from/:to",
  //   verifyToken.verifyTokenAPI,
  newsController.findNewsByDate
);
routes.put(
  "/:id",
  upload.single("img"),
  //   verifyToken.verifyTokenAPI,
  newsController.updateNews
);
routes.delete(
  "/:id",
  //   verifyToken.verifyTokenAPI,
  newsController.deleteNews
);
module.exports = routes;
