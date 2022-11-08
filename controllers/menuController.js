const model = require("../model/model");
const Menu = model.Menu;
const Sequelize = require("sequelize");
const MenuController = {
  addMenu: async (req, res) => {
    try {
      const newMenu = new Menu(req.body);
      const savedMenu = await newMenu.save();

      res.status(200).json(savedMenu);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllMenu: async (req, res) => {
    try {
      const Menu = await Menu.findAll();
      res.status(500).json(Menu);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findMenuDetail: async (req, res) => {
    try {
      const Menu = await Menu.findByPk(req.params.id);
      res.status(200).json(Menu);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateMenu: async (req, res) => {
    try {
      const Menu = await Menu.findByPk(req.params.id);
      await Menu.update(req.body);
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteMenu: async (req, res) => {
    try {
      const Menu = await Menu.findByPk(req.params.id);
      await Menu.destroy();
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = MenuController;
