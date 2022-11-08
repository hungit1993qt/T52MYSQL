const model = require("../model/model");
const Future = model.Future;
const Sequelize = require("sequelize");
const FutureController = {
  addFuture: async (req, res) => {
    try {
      const newFuture = new Future(req.body);
      const savedFuture = await newFuture.save();

      res.status(200).json(savedFuture);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllFuture: async (req, res) => {
    try {
      const Future = await Future.findAll({
        limit: 1,
      });
      res.status(500).json(Future);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findFutureDetail: async (req, res) => {
    try {
      const Future = await Future.findByPk(req.params.id);
      res.status(200).json(Future);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateFuture: async (req, res) => {
    try {
      const Future = await Future.findByPk(req.params.id);
      await Future.update(req.body);
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteFuture: async (req, res) => {
    try {
      const Future = await Future.findByPk(req.params.id);
      await Future.destroy();
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = FutureController;
