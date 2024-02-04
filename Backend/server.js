require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const sentimentRoutes = require("./routes/sentimentRoutes");

// express app
const app = express();

// middleware
app.use(express.json());

const bodyParser = require('body-parser');

//Configured to parse JSON bodies
app.use(bodyParser.json());

// Custom middleware that logs the request method and URL
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Important to proceed to the next middleware/route handler
});

// routes for sentiment analysis
app.use("/api/sentiment", sentimentRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
