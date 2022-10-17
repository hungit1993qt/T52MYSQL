const clientController = require("../controllers/clientController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  //   verifyToken.verifyTokenAPI,
  clientController.addClient
);
routes.get(
  "/",
  //   verifyToken.verifyTokenAPI,
  clientController.getAllClient
);
routes.get(
  "/detail/:id",
  //   verifyToken.verifyTokenAPI,
  clientController.findClientDetail
);
routes.get(
  "/search-name/:key",
  //   verifyToken.verifyTokenAPI,
  clientController.findClientByName
);
routes.get(
  "/search-phone/:key",
  //   verifyToken.verifyTokenAPI,
  clientController.findClientByPhone
);

routes.put(
  "/:id",
  //   verifyToken.verifyTokenAPI,
  clientController.updateClient
);
routes.delete(
  "/:id",
  //   verifyToken.verifyTokenAPI,
  clientController.deleteClient
);
module.exports = routes;
