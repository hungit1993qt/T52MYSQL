const clientController = require("../controllers/clientController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.addClient
);
routes.get(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.getAllClient
);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.findClientDetail
);
routes.get(
  "/search-name/:key",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.findClientByName
);
routes.get(
  "/search-phone/:key",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.findClientByPhone
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.updateClient
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.deleteClient
);
module.exports = routes;
