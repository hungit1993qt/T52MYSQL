const futureController = require("../controllers/futureController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  futureController.addFuture
);
routes.get("/", verifyToken.verifyTokenAPI, futureController.getAllFuture);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  futureController.findFutureDetail
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  futureController.updateFuture
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  futureController.deleteFuture
);
module.exports = routes;
