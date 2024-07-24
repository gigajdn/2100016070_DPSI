const ItemRequest = require('../models/ItemRequest');

exports.createItemRequest = async (req, res) => {
  try {
    const itemRequest = new ItemRequest(req.body);
    await itemRequest.save();
    res.status(201).send(itemRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getItemRequests = async (req, res) => {
  try {
    const itemRequests = await ItemRequest.find();
    res.status(200).send(itemRequests);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getItemRequestById = async (req, res) => {
  try {
    const itemRequest = await ItemRequest.findById(req.params.id);
    if (!itemRequest) {
      return res.status(404).send();
    }
    res.status(200).send(itemRequest);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateItemRequest = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['itemName', 'itemSpecification', 'quantity', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    const itemRequest = await ItemRequest.findById(req.params.id);
    if (!itemRequest) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      itemRequest[update] = req.body[update];
    });

    await itemRequest.save();
    res.status(200).send(itemRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteItemRequest = async (req, res) => {
  try {
    const itemRequest = await ItemRequest.findByIdAndDelete(req.params.id);
    if (!itemRequest) {
      return res.status(404).send();
    }
    res.status(200).send(itemRequest);
  } catch (error) {
    res.status(500).send(error);
  }
};
