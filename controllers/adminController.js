const Admin = require('../models/Admin');
const ItemRequest = require('../models/ItemRequest');

exports.manageItemRequest = async (req, res) => {
  try {
    const itemRequest = await ItemRequest.findById(req.params.id);
    if (!itemRequest) {
      return res.status(404).send();
    }

    const { action } = req.body;
    if (action === 'approve') {
      itemRequest.status = 'approved';
    } else if (action === 'reject') {
      itemRequest.status = 'rejected';
    } else {
      return res.status(400).send({ error: 'Invalid action!' });
    }

    await itemRequest.save();
    res.status(200).send(itemRequest);
  } catch (error) {
    res.status(500).send(error);
  }
};
