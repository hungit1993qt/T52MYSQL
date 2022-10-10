const { Manager, News } = require("../model/model");
const NewsController = {
  addNews: async (req, res) => {
    try {
      const news = new News(req.body);
      if (req.file) {
        news.img = "https://t52-loan-nodejs.herokuapp.com/" + req.file.path;
      }

      const savedNews = await news.save();
      if (req.body.personPost) {
        const manager = Manager.findById(req.body.personPost);
        await manager.updateOne({ $push: { news: savedNews._id } });
      }

      res.status(200).json(savedNews);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllNews: async (req, res) => {
    try {
      const news = await News.find()
        .sort({ createdAt: -1 })
        .populate("personPost");
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findNews: async (req, res) => {
    try {
      const news = await News.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      }).populate("personPost");
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findNewsDetail: async (req, res) => {
    try {
      const newsDetail = await News.findById(req.params.id).populate(
        "personPost"
      );
      res.status(200).json(newsDetail);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateNews: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      await news.updateOne({ $set: req.body });
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await Manager.updateMany(
        {
          news: req.params.id,
        },
        { $pull: { news: req.params.id } }
      );
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = NewsController;
