import React, { useState } from "react";
import { connect } from 'react-redux';
import { submitReview } from "../redux/actions/submitReviewAction";
import { Grid, Container, Typography, TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material/';


function ReviewForm({sentiment, confidence, submitReview}) {

  //Create state to manage the user inputs
  const [reviewText, setReviewText] = useState("");
  const [feedback, setFeedback] = useState("");

  //Function to handle reviewText submission
  const handleReviewSubmit = () => {
    submitReview(reviewText); //Dispatch the action to submit the review
  }

  return (
    <Container>
      <Grid style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          placeholder="Enter review here"
          multiline
          autoFocus
          rows={7}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)} //update the state on change
          style={{
            height: "193px",
            width: "600px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            fontFamily: "Poppins",
          }}
        />
        <Button
          onClick={handleReviewSubmit} // Call the function to handle the submission
          sx={{
            color: "#ffffff",
            backgroundColor: "#4adede",
            borderRadius: 3,
            height: "50px",
            width: "220px",
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: "18px",
            marginLeft: "35px",
            fontFamily: "Poppins",
            "&:hover": {
              backgroundColor: "#1aa7ec",
            },
          }}
        >
          Submit Review
        </Button>
      </Grid>
      <Grid
        style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl>
            <Typography
              variant="h5"
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                marginBottom: "20px",
              }}
            >
              Sentiment Polarity
            </Typography>
            <RadioGroup
              value={sentiment}
              defaultValue=""
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="positive"
                control={<Radio />}
                label="Positive"
                sx={{ color: "#ffffff" }}
              />
              <FormControlLabel
                value="negative"
                control={<Radio />}
                label="Negative"
                sx={{ color: "#ffffff" }}
              />
              <FormControlLabel
                value="neutral"
                control={<Radio />}
                label="Neutral"
                sx={{ color: "#ffffff" }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              marginLeft: "90px",
            }}
          >
            Confidence Score
          </Typography>
          <TextField
            multiline
            autoFocus
            InputProps={{
              readOnly: true,
            }}
            style={{
              marginTop: "50px",
              marginLeft: "80px",
              height: "55px",
              width: "400px",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              fontFamily: "Poppins",
            }}
            value={confidence} // Display confidence score
          />
        </Grid>
        <Grid style={{display: 'flex', flexDirection: 'row'}}>
          <TextField
            placeholder="Enter feedback based on reviewText"
            multiline
            autoFocus
            rows={7}
            style={{
              marginTop: "80px",
              marginLeft: "30px",
              height: "193px",
              width: "500px",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              fontFamily: "Poppins",
            }}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)} // Update state on change
          />
          <Button
            
            sx={{
              color: "#ffffff",
              backgroundColor: "#4adede",
              borderRadius: 3,
              height: "50px",
              width: "220px",
              textTransform: "capitalize",
              fontWeight: "600",
              fontSize: "18px",
              marginLeft: "35px",
              fontFamily: "Poppins",
              marginTop: '80px',
              "&:hover": {
                backgroundColor: "#1aa7ec",
              },
            }}
          >
            Submit Feedback
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log("Redux state:", state); // Log the Redux state to see its structure
  return {
    sentiment: state.sentimentReducer?.sentiment,
    confidence: state.sentimentReducer?.confidence,
  };
};
const mapDispatchToProps = {
  submitReview, //This assumes that the action creator is named submitReview
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
