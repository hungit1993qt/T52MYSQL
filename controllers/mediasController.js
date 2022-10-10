const { Manager, Medias } = require("../model/model");
const mediasController = {
  addMedias: async (req, res) => {
    try {
      const newMedias = new Medias(req.body);
      const savedMedias = await newMedias.save();
      if (req.body.personPost) {
        const manager = Manager.findById(req.body.personPost);
        await manager.updateOne({ $push: { medias: savedMedias._id } });
      }
      res.status(200).json(savedMedias);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllMedias: async (req, res) => {
    try {
      const medias = await Medias.find()
        .sort({ createdAt: -1 })
        .populate("personPost");
      res.status(500).json(medias);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findMedias: async (req, res) => {
    try {
      const medias = await Medias.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      }).populate("personPost");
      res.status(200).json(medias);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findMediasDetail: async (req, res) => {
    try {
      const medias = await Medias.findById(req.params.id).populate(
        "personPost"
      );
      res.status(200).json(medias);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findMediasByDate: async (req, res) => {
    try {
      const medias = await Medias.find({
        createdAt: { $gte: req.params.from, $lte: req.params.to },
      })
        .sort({ createdAt: -1 })
        .populate("personPost");
      res.status(200).json(medias);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateMedias: async (req, res) => {
    try {
      const medias = await Medias.findById(req.params.id);
      await medias.updateOne({ $set: req.body });
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteMedias: async (req, res) => {
    try {
      await Manager.updateMany(
        {
          medias: req.params.id,
        },
        { $pull: { medias: req.params.id } }
      );
      await Medias.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = mediasController;
