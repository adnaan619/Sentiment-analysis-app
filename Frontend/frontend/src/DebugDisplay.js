import React from "react";
import { connect } from "react-redux";

const DebugDisplay = ({ sentiment, confidence }) => {
  return (
    <div>
      <h2>Debugging Display</h2>
      <p>Sentiment: {sentiment}</p>
      <p>Confidence: {confidence}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sentiment: state.sentimentReducer?.sentiment,
  confidence: state.sentimentReducer?.confidence,
});

export default connect(mapStateToProps)(DebugDisplay);
