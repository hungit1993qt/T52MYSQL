const mediasController = require("../controllers/mediasController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  //   verifyToken.verifyTokenAPI,
  mediasController.addMedias
);
routes.get(
  "/",
  //   verifyToken.verifyTokenAPI,
  mediasController.getAllMedias
);
routes.get(
  "/detail/:id",
  //   verifyToken.verifyTokenAPI,
  mediasController.findMediasDetail
);
routes.get(
  "/:key",
  //   verifyToken.verifyTokenAPI,
  mediasController.findMedias
);
routes.put(
  "/:id",
  //   verifyToken.verifyTokenAPI,
  mediasController.updateMedias
);
routes.delete(
  "/:id",
  //   verifyToken.verifyTokenAPI,
  mediasController.deleteMedias
);
module.exports = routes;
