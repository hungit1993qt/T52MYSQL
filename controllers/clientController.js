const { Store, Client } = require("../model/model");

const clientController = {
  addClient: async (req, res) => {
    try {
      const newClient = new Client(req.body);
      const savedClient = await newClient.save();
      if (req.body.store) {
        const store = Store.findById(req.body.store);
        await store.updateOne({ $push: { clients: savedClient._id } });
      }
      res.status(200).json(savedClient);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllClient: async (req, res) => {
    try {
      const client = await Client.find().populate("store");
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findClient: async (req, res) => {
    try {
      const client = await Client.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      }).populate("store");
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findClientDetail: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id).populate("store");
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findClientByDate: async (req, res) => {
    try {
      console.log(req.params.from, req.params.to, req.params.name);
      const client = await Client.find({
        createdAt: { $gte: req.params.from, $lte: req.params.to },
        // "store.name": { $eq: "T55" },
      })
        .sort({ createdAt: -1 })
        .populate("store");

      res.status(200).json(client);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateClient: async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      await client.updateOne({ $set: req.body });
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteClient: async (req, res) => {
    try {
      await Store.updateMany(
        { clients: req.params.id },
        { $pull: { clients: req.params.id } }
      );
      await Client.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = clientController;
