//Import Python shell
const { PythonShell } = require('python-shell');
const { default: UserFeedback } = require('../../Frontend/frontend/src/components/UserFeedback');

//Analyze sentiment
const analyzeSentiment = async (req, res) => {
  const { review } = req.body;

  let options = {
    mode: 'text',
    pythonOptions: ['-u'], //get the print results in real time
    scriptPath: '',
    args: [review]
  };

  PythonShell.run('sentiment-analysis.py', options, function (err, results) {
    if (err) throw err;
    //results is an array consisting of messages collected during execution
    console.log('results: &j', results);
    res.json(JSON.parse(results))
  })

  try {
    
    const sentimentResult = await Sentiment.create({
      reviewText: review,
      sentiment: result.sentiment,
      confidenceScore: result.confidence,
      userFeedback: '' //Initially stays empty 
    }); 

    res.status(200).json(sentimentResult);
  } catch (err) {
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  analyzeSentiment
};
