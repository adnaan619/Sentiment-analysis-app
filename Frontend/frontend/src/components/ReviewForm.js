import React, { useState } from "react";
import { connect } from "react-redux";
import { submitReview } from "../redux/actions/submitReviewAction";
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  Paper,
  Slider,
  Box,
} from "@mui/material/";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"; // For emotion icons, change as needed
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"; // For intent icons, change as needed
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ReviewForm({ sentiment, confidence, submitReview }) {
  // Mock data for the aspect-based classification chart
  const aspectData = {
    labels: ["Quality", "Service", "Price", "Ambiance"],
    datasets: [
      {
        label: "Score",
        data: [8, 5, 4, 6], // Example scores
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sliderValueText = (value) => {
    return `${value}`;
  };

  //Create state to manage the user inputs
  const [reviewText, setReviewText] = useState("");
  const [feedback, setFeedback] = useState("");

  //Function to handle reviewText submission
  const handleReviewSubmit = () => {
    submitReview(reviewText); //Dispatch the action to submit the review
  };

  // State for selected emotions and their scores
  const [selectedEmotions, setSelectedEmotions] = useState({});
  const [emotionScores, setEmotionScores] = useState("");

  const handleEmotionChange = (event) => {
    setSelectedEmotions({
      ...selectedEmotions,
      [event.target.name]: event.target.checked,
    });
  };

  const emotions = [
    "disappointment",
    "sadness",
    "annoyance",
    "neutral",
    "disapproval",
    "realization",
    "nervousness",
    "approval",
    "joy",
    "anger",
    "embarrassment",
    "caring",
    "remorse",
    "disgust",
    "grief",
    "confusion",
    "relief",
    "desire",
    "admiration",
    "optimism",
    "fear",
    "love",
    "excitement",
    "curiosity",
    "amusement",
    "surprise",
    "gratitude",
    "pride",
  ];

  const [selectedIntent, setSelectedIntent] = useState("");
  const [intentScale, setIntentScale] = useState(30);

  const intents = [
    { name: "Inquiry/Support", emoji: "🔍" },
    { name: "Appreciation/Gratitude", emoji: "🙏" },
    { name: "Cancellation/Return", emoji: "↩️" },
    { name: "Renewal/Reorder", emoji: "🔄" },
    { name: "Comparison/Consideration", emoji: "🤔" },
    { name: "Problem/Issue Reporting", emoji: "⚠️" },
    { name: "Praise/Endorsement", emoji: "👏" },
    { name: "Suggestion/Improvement", emoji: "💡" },
    { name: "Urgency/Immediate Need", emoji: "⏰" },
    { name: "Engagement/Interaction", emoji: "💬" },
  ];

  const handleIntentChange = (event) => {
    setSelectedIntent(event.target.value);
  };

  const handleScaleChange = (event, newValue) => {
    setIntentScale(newValue);
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      style={{
        marginTop: "-100px",
        display: "flex",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={6} style={{ display: "flex", flexDirection: "column" }}>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "20px",
                }}
                variant="h6"
              >
                Text Review Entry
              </Typography>
              <TextField
                style={{ fontFamily: "Poppins" }}
                fullWidth
                label="Enter your review"
                multiline
                rows={5}
                placeholder="I recently visited the new Italian restaurant in town..."
                variant="outlined"
                margin="normal"
                required
                error={reviewText.length < 25} 
                helperText={
                  reviewText.length < 25
                    ? "Review must be at least 25 characters"
                    : " "
                } 
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={{ fontFamily: "Poppins" }}
                  variant="contained"
                  color="primary"
                  onClick={handleReviewSubmit}
                  disabled={reviewText.length < 10} 
                >
                  Analyze
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid
            container
            style={{ display: "flex", flexDirection: "row" }}
            spacing={3}
          >
            <Grid item xs={12} sm={6}>
              <Paper
                style={{
                  padding: "20px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#f5f5f5",
                  borderRadius: "15px",
                  boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: "20px",
                    fontFamily: "Poppins",
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Aspect-Based Classification
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around", // Evenly space out the text fields
                    height: "80%", // Use most of the Paper's height
                  }}
                >
                  <TextField
                    disabled
                    label="Overall Aspect Score"
                    defaultValue="47.5"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: {
                        backgroundColor: "white",
                        borderRadius: "10px",
                      },
                    }}
                    style={{
                      marginBottom: "10px",
                    }}
                  />
                  <TextField
                    disabled
                    label="Aspect Keywords in Review"
                    defaultValue="Help, Wow, Product"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: {
                        backgroundColor: "white",
                        borderRadius: "10px",
                      },
                    }}
                    style={{
                      marginBottom: "10px",
                    }}
                  />
                  <TextField
                    disabled
                    label="Review Helpfulness (Count)"
                    defaultValue="5"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      style: {
                        backgroundColor: "white",
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                style={{
                  padding: "20px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fontFamily: "Poppins",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    color: "#333",
                  }}
                  variant="h6"
                >
                  Intent Detected
                </Typography>
                <FormControl
                  component="fieldset"
                  style={{ overflowY: "auto", flexGrow: 1 }}
                >
                  <RadioGroup
                    aria-label="intent"
                    name="intent"
                    value={selectedIntent}
                    onChange={handleIntentChange}
                  >
                    {intents.map((intent, index) => (
                      <FormControlLabel
                        value={intent.name}
                        control={<Radio />}
                        label={
                          <Typography
                            style={{ fontFamily: "Poppins", fontSize: "15px" }}
                          >{`${intent.emoji} ${intent.name}`}</Typography>
                        }
                        key={index}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <Typography style={{ fontFamily: "Poppins" }} gutterBottom>
                  Scale on detected intent
                </Typography>
                <Slider
                  value={intentScale}
                  onChange={handleScaleChange}
                  aria-labelledby="intent-scale"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: "flex", flexDirection: "column" }}>
          <Paper style={{ padding: "20px" }}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Graded Sentiment Analysis
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              my={2}
            >
              <SentimentVeryDissatisfiedIcon />
              <SentimentDissatisfiedIcon />
              <SentimentNeutralIcon />
              <SentimentSatisfiedIcon />
              <SentimentVerySatisfiedIcon />
            </Box>
            <Slider
              defaultValue={50}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
          </Paper>
          <Paper
            style={{
              padding: "20px",
              marginBottom: "25px",
              marginTop: "25px",
              display: "flex",
              maxHeight: "250px",
            }}
          >
            <Grid container spacing={2}>
              {" "}
              {/* Adjust spacing as needed */}
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: "20px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Emotion Detected
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                {/* Adjust grid sizing as needed for emotion labels */}
                <Box
                  display="flex"
                  flexWrap="wrap" // Allows items to wrap and fill the horizontal space
                  style={{
                    maxHeight: "190px",
                    overflowY: "auto",
                    paddingRight: "20px", // Maintains spacing between this box and the chart
                  }}
                >
                  {emotions.map((emotion, index) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedEmotions[emotion] || false}
                          onChange={handleEmotionChange}
                          name={emotion}
                          size="small"
                        />
                      }
                      label={
                        <Typography
                          variant="caption"
                          style={{ fontSize: "0.75rem", fontFamily: "Poppins" }}
                        >
                          {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                        </Typography>
                      }
                      key={index}
                      style={{ marginRight: "10px", marginBottom: "10px" }} // Add spacing between labels
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6}>
                {" "}
                {/* Adjust grid sizing as needed for the bar chart */}
                <Box
                  style={{
                    height: "190px", // Ensure it's the same as your labels box for alignment
                    width: "100%", // Ensures the chart uses the full width of its grid item
                  }}
                >
                  <Bar
                    data={aspectData}
                    options={{
                      maintainAspectRatio: false, // Ensures the chart fills the container
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ padding: "20px" }}>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#333",
              }}
            >
              Feedback...
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Enter Feedback based on the results"
              variant="outlined"
              margin="normal"
              style={{ fontFamily: "Poppins" }}
            />
          </Paper>
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
  submitReview, 
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
