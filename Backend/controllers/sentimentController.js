//Import Python shell
const { PythonShell } = require("python-shell");

//Analyze sentiment
const analyzeSentiment = (req, res) => {
  const { review } = req.body;

  let options = {
    mode: "text",
    pythonOptions: ["-u"], //get the print results in real time
    args: [review],
    pythonPath: "C:Python312python.exe",

  };

  PythonShell.run("sentiment_analysis.py", options, function (err, results) {
    if (err) {
      console.error("Error when running PythonShell: ",err);
      return res
        .status(500)
        .json({ error: "Error running sentiment analysis" });
    }
    //If the results aren't in the expected format
    if (!result || results.length === 0) {
      console.error('No results from pythonShell')
    }
    // results is an array consisting of messages collected during execution
    console.log("results:", results);
    try {
      const parsedResults = JSON.parse(results[0]);
      res.status(200).json(parsedResults);
    } catch (parseErr) {
      console.error(parseErr);
      res
        .status(500)
        .json({ error: "Error parsing sentiment analysis results" });
    }
  });
};

module.exports = {
  analyzeSentiment,
};
