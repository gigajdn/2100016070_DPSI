const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');
const { authMiddleware, employeeMiddleware } = require('../middlewares/authMiddleware');
const { checkAuctionStatus } = require('../middlewares/auctionMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (employee)
router.post('/auctions', authMiddleware, employeeMiddleware, auctionController.createAuction);
router.get('/auctions', authMiddleware, auctionController.getAuctions);
router.get('/auctions/:id', authMiddleware, auctionController.getAuctionById);
router.put('/auctions/:id', authMiddleware, checkAuctionStatus, auctionController.updateAuction);
router.delete('/auctions/:id', authMiddleware, employeeMiddleware, auctionController.deleteAuction);
router.post('/auctions/start/:id', authMiddleware, employeeMiddleware, auctionController.startAuction);
router.post('/auctions/close/:id', authMiddleware, employeeMiddleware, auctionController.closeAuction);
router.post('/auctions/cancel/:id', authMiddleware, employeeMiddleware, auctionController.cancelAuction);
router.post('/auctions/confirmReceipt/:id', authMiddleware, employeeMiddleware, auctionController.confirmReceipt);

module.exports = router;
