const mongoose = require('mongoose');

const Schema = mongoose.Schema

const sentimentSchema = new Schema({
    reviewText: {  //Stores the text reviews
        type: String,
        required: true
    },
    sentiment: {  //stores the sentiment of the review
        type: String,
        required: true,
        enum: ['positive', 'negative', 'neutral'] //categories
    },
    confidenceScore: {  //stores the confidence score of the sentiment analysis
        type: Number,
        required: true
    },
    userFeedback: {  //Stores user feedback on analysis
        type: String,
        required: false  //Assuming this is optional por el momento
    }
}, { timestamps: true }); //Timestamps could help when analysis is completed

exports = mongoose.model('Sentiment', sentimentSchema);