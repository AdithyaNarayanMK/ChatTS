from flask import Blueprint
from flask import request
import json
import requests
from .auth import login_required


API_URL = "https://api-inference.huggingface.co/models/google/pegasus-large"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	

summModel = Blueprint("model", __name__)

@login_required
@summModel.route("summarize")
def summarize():
    data = json.loads(request.get_data().decode())


    summarized = requests.post(API_URL, headers=headers, json=data)
    return summarized.json(), 200
    
