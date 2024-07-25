const express = require('express');
const router = express.Router();
const itemRequestController = require('../controllers/itemRequestController');
const { authMiddleware } = require('../middlewares/authMiddleware');

<<<<<<< HEAD
//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
=======
>>>>>>> b8b58a706df2f8d745be7c0f91f1daca498af4e6
router.post('/itemRequests', authMiddleware, itemRequestController.createItemRequest);
router.get('/itemRequests', authMiddleware, itemRequestController.getItemRequests);
router.get('/itemRequests/:id', authMiddleware, itemRequestController.getItemRequestById);
router.put('/itemRequests/:id', authMiddleware, itemRequestController.updateItemRequest);
router.delete('/itemRequests/:id', authMiddleware, itemRequestController.deleteItemRequest);

module.exports = router;
