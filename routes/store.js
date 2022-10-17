const storeController = require("../controllers/StoreController");

const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.addStore
);
routes.get(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.getAllStore
);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.findStoreDetail
);
routes.get(
  "/:key",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.findStore
);
routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.updateStore
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.deleteStore
);
module.exports = routes;
