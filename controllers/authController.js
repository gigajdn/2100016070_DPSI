const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, error) => {
  try {
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 8);
    await user.save();

    // Construct the JWT payload
    const payload = {
      _id: user._id.toString(),
      role: user.role, 
      name: user.name,
      iat: Math.floor(Date.now() / 1000) // Issued at time in seconds
    };

    const token = jwt.sign(payload, 'your_jwt_secret');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'Unable to login' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Unable to login' });
    }

    const token = jwt.sign({ _id: user._id.toString() }, 'your_jwt_secret');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};
