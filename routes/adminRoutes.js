const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.post('/admins/manageItemRequest/:id', authMiddleware, adminMiddleware, adminController.manageItemRequest);

module.exports = router;
