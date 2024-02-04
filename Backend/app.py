from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load models
vectorizer = joblib.load('tfidf_vectorizer1.joblib')
model = joblib.load('final_svc_model1.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    review = data['review']
    review_vect = vectorizer.transform([review])
    prediction = model.predict(review_vect)
    confidence = model.decision_function(review_vect).max()
    sentiment_map = {0: 'positive', 1: 'neutral', 2: 'negative'}
    sentiment_label = sentiment_map[prediction[0]]

    result = {
        'sentiment': sentiment_label,
        'confidence': float(confidence)
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
