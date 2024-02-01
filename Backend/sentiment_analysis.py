import sys
import joblib
import json
import os

print(os.getcwd())

#Load from both files
vectorizer = joblib.load('tfidf_vectorizer.joblib')
model = joblib.load('final_svc_model.joblib')

def predict_sentiment(review):
    #Vectorize the incoming review
    review_vect = vectorizer.transform([review])

    #Predict the sentiment 
    prediction = model.predict(review_vect)

    #Use decision function for confidence
    confidence = model.decision_function(review_vect)

    #Get the absolute value to represent confidence
    confidence_abs = abs(confidence).max()

    #Now map the numerical predictions to sentiment labels
    sentiment_map = {0: 'positive', 1: 'neutral', 2: 'negative'}
    sentiment_label = sentiment_map.get(prediction[0], 'neutral')

    #Construct a response object
    result = {
        'sentiment': sentiment_label,
        'confidence': float(confidence_abs)
    }

    #Return the result as a JSON string
    return json.dumps(result)

if __name__ == '__main__':
    #The review text is passed as a cmd arg
    input_review = sys.argv[1]
    print(predict_sentiment(input_review))
