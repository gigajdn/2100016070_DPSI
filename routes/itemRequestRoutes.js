const express = require('express');
const router = express.Router();
const itemRequestController = require('../controllers/itemRequestController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/itemRequests', authMiddleware, itemRequestController.createItemRequest);
router.get('/itemRequests', authMiddleware, itemRequestController.getItemRequests);
router.get('/itemRequests/:id', authMiddleware, itemRequestController.getItemRequestById);
router.put('/itemRequests/:id', authMiddleware, itemRequestController.updateItemRequest);
router.delete('/itemRequests/:id', authMiddleware, itemRequestController.deleteItemRequest);

module.exports = router;
