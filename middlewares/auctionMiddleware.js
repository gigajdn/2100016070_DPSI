const Auction = require('../models/Auction'); // Adjust the path according to your project structure

const checkAuctionStatus = async (req, res, next) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).send({ error: 'Auction not found' });
    }

    if (auction.status === 'closed' || auction.status === 'canceled') {
      return res.status(400).send({ error: `Cannot update auction with status ${auction.status}` });
    }

    next();
  } catch (error) {
    res.status(500).send({ error: 'Server error', details: error.message });
  }
};

module.exports = { checkAuctionStatus };
