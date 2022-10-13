const model = require("../model/model");
const uploadImages = model.uploadImages;
const Sequelize = require("sequelize");
const uploadImagesController = {
  adduploadImages: async (req, res) => {
    try {
      const result = [];

      if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
          const newUploadImages = new uploadImages({
            img: "http://localhost:8080/" + req.files[i].path,
          });
          const savedUploadImages = await newUploadImages.save();
          result[i] = "http://localhost:8080/" + req.files[i].path;
        }
      }
      res.json({ result });
    } catch (error) {
      res.json(error);
    }
  },
  getAlluploadImages: async (req, res) => {
    try {
      const allUploadImages = await uploadImages.findAll();
      res.json({ allUploadImages });
    } catch (error) {
      res.json(error);
    }
  },

  finduploadImagesDetail: async (req, res) => {
    try {
      const detailUploadImages = await uploadImages.findByPk(req.params.id);
      res.status(200).json(detailUploadImages);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateuploadImages: async (req, res) => {
    try {
      const updateUploadImages = await uploadImages.findByPk(req.params.id);
      if (req.file) {
        await updateUploadImages.update({
          img: "http://localhost:8080/" + req.file.path,
        });
        res.status(200).json("Update successfuly");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteuploadImages: async (req, res) => {
    try {
      const UploadImages = await uploadImages.findByPk(req.params.id);
      await UploadImages.destroy();
      res.status(200).json("Delete successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = uploadImagesController;
