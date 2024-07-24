const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).send({ error: 'Access denied.' });
  }
  next();
};

const employeeMiddleware = (req, res, next) => {
  if (req.user.role !== 'Employee' && req.user.role !== 'Admin') {
    return res.status(403).send({ error: 'Access denied.' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware, employeeMiddleware };
