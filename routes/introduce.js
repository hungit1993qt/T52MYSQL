const introduceController = require("../controllers/introduceController");
const verifyToken = require("../middleware/verifyToken");
const routes = require("express").Router();
routes.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  introduceController.addIntroduce
);
routes.get(
  "/",
  verifyToken.verifyTokenAPI,
  introduceController.getAllIntroduce
);
routes.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  introduceController.findIntroduceDetail
);

routes.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  introduceController.updateIntroduce
);
routes.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  introduceController.deleteIntroduce
);
module.exports = routes;
