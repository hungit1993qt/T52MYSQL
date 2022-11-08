const model = require("../model/model");
const CoreValue = model.CoreValue;
const Sequelize = require("sequelize");
const CoreValueController = {
  addCoreValue: async (req, res) => {
    try {
      const newCoreValue = new CoreValue(req.body);
      const savedCoreValue = await newCoreValue.save();

      res.status(200).json(savedCoreValue);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllCoreValue: async (req, res) => {
    try {
      const CoreValue = await CoreValue.findAll({
        limit: 1,
      });
      res.status(500).json(CoreValue);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findCoreValueDetail: async (req, res) => {
    try {
      const CoreValue = await CoreValue.findByPk(req.params.id);
      res.status(200).json(CoreValue);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateCoreValue: async (req, res) => {
    try {
      const CoreValue = await CoreValue.findByPk(req.params.id);
      await CoreValue.update(req.body);
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteCoreValue: async (req, res) => {
    try {
      const CoreValue = await CoreValue.findByPk(req.params.id);
      await CoreValue.destroy();
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = CoreValueController;
