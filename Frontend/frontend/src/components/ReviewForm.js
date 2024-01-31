import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Grid, Container, Typography } from '@mui/material/';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


function ReviewTextbox() {

  //Create state to manage the user inputs
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState("neutral");
  const [confidence, setConfidence] = useState("");
  const [feedback, setFeedback] = useState("");

  //Function to handle review submission
  const submitReview = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review }),
      });
      const data = await response.json();
      setSentiment(data.sentiment);
      setConfidence(data.confidence.toFixed(2));   //Decimal place adjusted to 2
    } catch (error) {
      console.error('Error', error);
      //Handle the error appropriately in the application
    }
  };

  return (
    <Container>
      <Grid style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          placeholder="Enter review here"
          multiline
          autoFocus
          rows={7}
          value={review}
          onChange={(e) => setReview(e.target.value)} //update the state on change
          style={{
            height: "193px",
            width: "600px",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            fontFamily: "Poppins",
          }}
        />
        <Button
          onClick={submitReview} // Add onClick event to handle submission
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
            // marginTop: "-20px",
            // marginBottom: "20px",
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
            <RadioGroup value={sentiment} defaultValue="neutral" name="radio-buttons-group">
              <FormControlLabel
                style={{ color: "#ffffff" }}
                value="positive"
                control={<Radio />}
                label="Positive"
              />
              <FormControlLabel
                style={{ color: "#ffffff" }}
                value="negative"
                control={<Radio />}
                label="Negative"
              />
              <FormControlLabel
                style={{ color: "#ffffff" }}
                value="neutral"
                control={<Radio />}
                label="Neutral"
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
        <Grid>
          <TextField
            placeholder="Enter feedback based on review"
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReviewTextbox;
