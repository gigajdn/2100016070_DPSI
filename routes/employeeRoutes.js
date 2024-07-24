const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authMiddleware, employeeMiddleware } = require('../middlewares/authMiddleware');

router.post('/employees/manageItemRequest/:id', authMiddleware, employeeMiddleware, employeeController.manageItemRequest);

module.exports = router;
