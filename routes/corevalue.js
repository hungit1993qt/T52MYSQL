const coreValueController = require("../controllers/coreValueController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  coreValueController.addCoreValue
);
routes.get(
  "/",
  verifyToken.verifyTokenAPI,
  coreValueController.getAllCoreValue
);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  coreValueController.findCoreValueDetail
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  coreValueController.updateCoreValue
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  coreValueController.deleteCoreValue
);
module.exports = routes;
