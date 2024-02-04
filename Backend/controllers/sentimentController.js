const axios = require('axios');

const analyzeSentiment = (req, res) => {
  const { review } = req.body;

  axios.post('http://localhost:5000/predict', { review })
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.error("Error when calling Flask service: ", error);
      res.status(500).json({ error: "Error running sentiment analysis" });
    });
};

module.exports = {
  analyzeSentiment,
}
