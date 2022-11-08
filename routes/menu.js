const menuController = require("../controllers/menuController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  menuController.addMenu
);
routes.get("/", verifyToken.verifyTokenAPI, menuController.getAllMenu);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  menuController.findMenuDetail
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  menuController.updateMenu
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  menuController.deleteMenu
);
module.exports = routes;
