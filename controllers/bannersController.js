const { Banners } = require("../model/model");
const bannersController = {
  addBanners: async (req, res) => {
    try {
      
      const newBanners = new Banners({
        name: req.body.name,
      });
      if (req.file) {
        newBanners.img = "https://t52-loan-nodejs.herokuapp.com/" + req.file.path;
      }
      const savedBanners = await newBanners.save();
      res.status(200).json(savedBanners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllBanners: async (req, res) => {
    try {
      const banners = await Banners.find().sort({ createdAt: -1 });
      res.status(200).json(banners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findBanners: async (req, res) => {
    try {
      const banners = await Banners.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      });
      res.status(200).json(banners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findBannersDetail: async (req, res) => {
    try {
      const banners = await Banners.findById(req.params.id);
      res.status(200).json(banners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateBanners: async (req, res) => {
    try {
      const banners = await Banners.findById(req.params.id);
      await banners.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteBanners: async (req, res) => {
    try {
      await Banners.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = bannersController;
