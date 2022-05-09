
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import json
app = Flask(__name__)
cors = CORS(app)

actual_data = ""

app.config['CORS_HEADERS'] = 'Content-Type'
from predict import clf, vectorizer, cleaning_data


app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route('/')
def index():
    output = {
        "message": "Hello World!",
        "status": "success"
    }
    return json.dumps(output)

@app.route('/api/v1/predict', methods=['POST','GET','OPTIONS'])
@cross_origin()
def predict():
    # Get the json data from the request
    data = request.get_json()
    actual_data = data
    sentence = data['sentence']
    news = cleaning_data(str(sentence))

    # cleaned_sentence = cleaning_text(sentence) # TODO: @Arin replace this line with the one in your code
    # Get the prediction
    single_prediction = clf.predict(vectorizer.transform([news]).toarray())
    #prediction = clf.predict(vectorizer.transform([cleaned_sentence])) # TODO: @Arin replace this line with the one in your code
    # Return the prediction
    if int(single_prediction[0]):
        ping = "The News provided by you is FAKE.."
    else:
        ping = "The News provided by you is True.."
    print(single_prediction[0])
    output = {
        "message": "Prediction",
        "status": "success",
        "data": {
            "prediction": ping,
            "Sentence":actual_data
        }
    }
    return json.dumps(output)


if __name__ == "__main__":
    app.run()