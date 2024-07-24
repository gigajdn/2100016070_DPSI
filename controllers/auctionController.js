const Auction = require('../models/Auction');
const User = require('../models/User');

exports.createAuction = async (req, res) => {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).send(auction);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.status(200).send(auctions);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateAuction = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['item', 'highestBid', 'status', 'participants'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      auction[update] = req.body[update];
    });

    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndDelete(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.startAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }

    auction.status = 'open';
    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.closeAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }

    auction.status = 'closed';
    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.cancelAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }

    auction.status = 'canceled';
    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.confirmReceipt = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send();
    }

    // Assuming there's a way to confirm the receipt
    // auction.receiptConfirmed = true;
    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};
