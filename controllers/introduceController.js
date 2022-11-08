const model = require("../model/model");
const Introduce = model.Introduce;
const Sequelize = require("sequelize");
const IntroduceController = {
  addIntroduce: async (req, res) => {
    try {
      const newIntroduce = new Introduce(req.body);
      const savedIntroduce = await newIntroduce.save();

      res.status(200).json(savedIntroduce);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllIntroduce: async (req, res) => {
    try {
      const Introduce = await Introduce.findAll({
        limit: 1,
      });
      res.status(500).json(Introduce);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findIntroduceDetail: async (req, res) => {
    try {
      const Introduce = await Introduce.findByPk(req.params.id);
      res.status(200).json(Introduce);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateIntroduce: async (req, res) => {
    try {
      const Introduce = await Introduce.findByPk(req.params.id);
      await Introduce.update(req.body);
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteIntroduce: async (req, res) => {
    try {
      const Introduce = await Introduce.findByPk(req.params.id);
      await Introduce.destroy();
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = IntroduceController;
