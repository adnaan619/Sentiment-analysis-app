require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const sentimentRoutes = require("./routes/sentimentRoutes");
const cors = require('cors');


// express app
const app = express();

// middleware
app.use(express.json());

const bodyParser = require('body-parser');

app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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
