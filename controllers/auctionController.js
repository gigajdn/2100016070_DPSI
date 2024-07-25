const Auction = require('../models/Auction');
const ItemRequest = require('../models/ItemRequest');

exports.createAuction = async (req, res) => {
  try {
    const { item, highestBid, participants } = req.body;
    const status = "closed"; // Ensure status is correctly set to 'closed'

    // Check if the item exists
    const foundItem = await ItemRequest.findById(item);
    if (!foundItem) {
      return res.status(404).send({ error: 'Item not found' });
    }

    // Add user ID to participants
    if (!auction.participants.includes(req.user._id)) {
      auction.participants.push(req.user._id);
    }

    // Create the auction
    let auction = new Auction({ item, highestBid, status, participants });
    await auction.save();

    // Populate the item and participants fields with the corresponding details
    auction = await Auction.findById(auction._id).populate('item').populate('participants').exec();

    res.status(201).send(auction);
  } catch (error) {
    res.status(400).send({ error: 'Error creating auction', details: error.message });
  }
};

exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate('item').populate('participants');
    res.status(200).send(auctions);
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving auctions', details: error.message });
  }
};

exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id).populate('item').populate('participants');
    if (!auction) {
      return res.status(404).send({ error: 'Auction not found' });
    }
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving auction', details: error.message });
  }
};

exports.updateAuction = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['highestBid'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      console.log('Invalid updates:', updates);
      return res.status(400).send({ error: 'Invalid updates!' });
    }

    let auction = await Auction.findById(req.params.id);
    if (!auction) {
      console.log('Auction not found:', req.params.id);
      return res.status(404).send({ error: 'Auction not found' });
    }

    // Validate highestBid
    if (req.body.highestBid !== undefined && req.body.highestBid <= auction.highestBid) {
      return res.status(400).send({ error: 'New highestBid must be greater than the current highestBid' });
    }

    updates.forEach((update) => {
      auction[update] = req.body[update];
    });

    // Add user ID to participants
    if (!auction.participants.includes(req.user._id)) {
      auction.participants.push(req.user._id);
    }

    await auction.save();
    auction = await Auction.findById(auction._id).populate('item').populate('participants');
    console.log('Updated auction:', auction);
    res.status(200).send(auction);
  } catch (error) {
    console.error('Error updating auction:', error);
    res.status(400).send({ error: 'Error updating auction', details: error.message });
  }
};

exports.deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndDelete(req.params.id).populate('item').populate('participants');
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
    const auction = await Auction.findById(req.params.id).populate('item').populate('participants');
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
    const auction = await Auction.findById(req.params.id).populate('item').populate('participants');
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
    const auction = await Auction.findById(req.params.id).populate('item').populate('participants');
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
    const auction = await Auction.findById(req.params.id).populate('item').populate('participants');
    if (!auction) {
      return res.status(404).send();
    }

    // Assuming there's a way to confirm the receipt
    auction.receiptConfirmed = true;
    await auction.save();
    res.status(200).send(auction);
  } catch (error) {
    res.status(500).send(error);
  }
};
