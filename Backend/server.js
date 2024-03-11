const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes'); // Ensure you've imported userRoutes correctly
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);

app.use(errorHandler); // Error handler should be the last middleware

// Starting the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
