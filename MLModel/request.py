import requests


# request with input as json data
req = requests.post("http://127.0.0.1:5000/api/v1/predict", json={
    "sentence": "Dog died in a fire, and the fireman was injured."
})

# print response as json
print(req.json())