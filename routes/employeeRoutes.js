const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { authMiddleware, employeeMiddleware } = require('../middlewares/authMiddleware');

//authMiddleware digunakan untuk memastikan bahwa pengguna telah melakukan authentifikasi dengan login
//adminMiddleware merupakan pengecekan lebih lanjut dengan role yang ada pada pengguna (employee)
router.post('/employees/manageItemRequest/:id', authMiddleware, employeeMiddleware, employeeController.manageItemRequest);

module.exports = router;
