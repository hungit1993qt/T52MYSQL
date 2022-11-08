const model = require("../model/model");
const Service = model.Service;
const Sequelize = require("sequelize");
const ServiceController = {
  addService: async (req, res) => {
    try {
      const newService = new Service(req.body);
      const savedService = await newService.save();

      res.status(200).json(savedService);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllService: async (req, res) => {
    try {
      const Service = await Service.findAll({
        limit: 1,
      });
      res.status(500).json(Service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findServiceDetail: async (req, res) => {
    try {
      const Service = await Service.findByPk(req.params.id);
      res.status(200).json(Service);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateService: async (req, res) => {
    try {
      const Service = await Service.findByPk(req.params.id);
      await Service.update(req.body);
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteService: async (req, res) => {
    try {
      const Service = await Service.findByPk(req.params.id);
      await Service.destroy();
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = ServiceController;
