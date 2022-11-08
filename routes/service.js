const serviceController = require("../controllers/serviceController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  serviceController.addService
);
routes.get("/", verifyToken.verifyTokenAPI, serviceController.getAllService);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  serviceController.findServiceDetail
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  serviceController.updateService
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  serviceController.deleteService
);
module.exports = routes;
