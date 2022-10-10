const { Store, Client } = require("../model/model");

const storeController = {
  addStore: async (req, res) => {
    try {
      const newStore = new Store(req.body);
      const savedStore = await newStore.save();
      res.status(200).json(savedStore);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllStore: async (req, res) => {
    try {
      const store = await Store.find().populate("clients");
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findStore: async (req, res) => {
    try {
      const store = await Store.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      }).populate("clients");
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findStoreDetail: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id).populate("clients");
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateStore: async (req, res) => {
    try {
      const store = await Store.findById(req.params.id);
      await store.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteStore: async (req, res) => {
    try {
      await Client.updateMany({ store: req.params.id }, { store: null });
      await Store.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = storeController;
