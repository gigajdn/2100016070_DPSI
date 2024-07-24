require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Database connection
const connectDB = require('./config/dbConfig')
connectDB();

// Initialize Express app
app.use(express.json());

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const itemRequestRoutes = require('./routes/itemRequestRoutes');

// Use routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', employeeRoutes);
app.use('/api', auctionRoutes);
app.use('/api', itemRequestRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Lelang System API');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
