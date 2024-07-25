const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');
<<<<<<< HEAD
const { authMiddleware, employeeMiddleware } = require('../middlewares/authMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (employee)
router.post('/auctions', authMiddleware, employeeMiddleware, auctionController.createAuction);
router.get('/auctions', authMiddleware, auctionController.getAuctions);
router.get('/auctions/:id', authMiddleware, auctionController.getAuctionById);
router.put('/auctions/:id', authMiddleware, auctionController.updateAuction);
router.delete('/auctions/:id', authMiddleware, employeeMiddleware, auctionController.deleteAuction);
router.post('/auctions/start/:id', authMiddleware, employeeMiddleware, auctionController.startAuction);
router.post('/auctions/close/:id', authMiddleware, employeeMiddleware, auctionController.closeAuction);
router.post('/auctions/cancel/:id', authMiddleware, employeeMiddleware, auctionController.cancelAuction);
router.post('/auctions/confirmReceipt/:id', authMiddleware, employeeMiddleware, auctionController.confirmReceipt);
=======
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
>>>>>>> b8b58a706df2f8d745be7c0f91f1daca498af4e6

module.exports = router;
