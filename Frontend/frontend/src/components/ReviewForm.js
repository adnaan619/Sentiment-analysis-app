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
            <Paper style={{ padding: "20px" }}>
              <Typography style={{ fontFamily: "Poppins" }} variant="h6">
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
              />
              <Button
                style={{ fontFamily: "Poppins" }}
                variant="contained"
                color="primary"
              >
                Analyze
              </Button>
            </Paper>
          </Grid>
          <Grid
            container
            style={{ display: "flex", flexDirection: "row" }}
            spacing={3}
          >
            <Grid item xs={12} sm={6}>
              {" "}
              {/* Adjust based on your layout needs */}
              <Paper
                style={{
                  padding: "20px",
                  height: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ marginBottom: "10px", fontFamily: "Poppins" }}
                >
                  Aspect-Based Classification
                </Typography>
                {/* <Box
                  style={{
                    overflowY: "auto",
                    flexGrow: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  {emotions.map((emotion, index) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedEmotions[emotion] || false}
                          onChange={handleEmotionChange}
                          name={emotion}
                          size="small" // Smaller checkboxes
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
                      style={{ width: "auto", flexGrow: 1, maxWidth: "30%" }} // Adjust based on your preference
                    />
                  ))}
                </Box> */}
                {/* <TextField
                  fullWidth
                  label="Emotion Scores"
                  multiline
                  rows={2}
                  variant="outlined"
                  margin="dense" // Less space around the TextField
                  style={{ fontFamily: "Poppins" }}
                /> */}
                <TextField
                  disabled
                  label="Overall Aspect Score"
                  defaultValue="47.5"
                  variant="outlined"
                />
                <TextField
                  disabled
                  label="Aspect Keywords in Review"
                  defaultValue="Help Wow Product"
                  variant="outlined"
                />
                <TextField
                  disabled
                  label="Review Helpfulness (Count)"
                  defaultValue="5"
                  variant="outlined"
                />
              </Paper>
            </Grid>
            {/* Intent Detected */}
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
                <Typography style={{ fontFamily: "Poppins" }} variant="h6">
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
                            style={{ fontFamily: "Poppins, Arial, sans-serif" }}
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
            <Typography variant="h6" style={{ fontFamily: "Poppins" }}>
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
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              style={{ fontFamily: "Poppins", width: "100%" }}
            >
              Emotion Detected
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              width="100%"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{
                  marginTop: "35px",
                  marginRight: '20px',
                  maxHeight: "200px", 
                  overflowY: "auto", 
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
                  />
                ))}
              </Box>
              <Bar
                style={{ paddingTop: "30px", paddingRight: "20px" }}
                data={aspectData}
                options={{ maintainAspectRatio: true }}
              />
              {/* </Box> */}
            </Box>
          </Paper>
          <Paper style={{ padding: "20px" }}>
            <Typography variant="h6" style={{ fontFamily: "Poppins" }}>
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
  submitReview, //This assumes that the action creator is named submitReview
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
