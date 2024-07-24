const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/auctions', authMiddleware, auctionController.createAuction);
router.get('/auctions', authMiddleware, auctionController.getAuctions);
router.get('/auctions/:id', authMiddleware, auctionController.getAuctionById);
router.put('/auctions/:id', authMiddleware, auctionController.updateAuction);
router.delete('/auctions/:id', authMiddleware, auctionController.deleteAuction);
router.post('/auctions/start/:id', authMiddleware, auctionController.startAuction);
router.post('/auctions/close/:id', authMiddleware, auctionController.closeAuction);
router.post('/auctions/cancel/:id', authMiddleware, auctionController.cancelAuction);
router.post('/auctions/confirmReceipt/:id', authMiddleware, auctionController.confirmReceipt);

module.exports = router;
