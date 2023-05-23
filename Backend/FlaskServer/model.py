import requests as req
from .auth import login_required
from flask_cors import cross_origin

from flask import Blueprint, request

API_URL = "https://api-inference.huggingface.co/models/google/pegasus-cnn_dailymail"
headers = {"Authorization": f"Bearer {API_KEY}"}



model_bp = Blueprint("model", __name__)

@cross_origin
@model_bp.route("/model", methods = ["POST"])
# @login_required
def model():
    data = request.get_json()
    payload = {"inputs":data["text"]}

    res = req.post(API_URL, headers=headers, json=payload)
    print(res.json()[0]["summary_text"])
    return res.json()[0]["summary_text"]
