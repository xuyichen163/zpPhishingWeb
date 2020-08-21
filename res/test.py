# -*- coding:utf-8 -*-
from flask import Flask
from flask import request
from flask import render_template, jsonify
import os
import requests

#from miaoxuefeng.check import check, check2
from check  import check, check2
os.environ["CUDA_VISIBLE_DEVICES"] = "2"
app = Flask(__name__)

@app.route('/', methods=['GET'])
def signin_form():
    return render_template('form.html')

@app.route('/', methods=['POST'])
def signin():
    url = request.form['url']

    mes = check(url)
    res = 0
    if mes['mffcduf'] != "":
        res = mes['mffcduf']
    elif mes['cnn_lstm'] != "":
        res = mes['cnn_lstm']

    if res == 0:
        res = u"Legitimate!"
    else:
        res = u"Phishing!"

    if mes['blacks'] != "":
        res = u"Phishing!"
    if mes['whites'] != "":
        res = u"Legitimate!"

    if mes['alexa'] == "":
        mes['alexa'] = "None"
    if mes['blacks'] == "":
        mes['blacks'] = u"Not match"
    else:
        mes['blacks'] = u"Phishing"

    if mes['whites'] == "":
        mes['whites'] = u"Not match "
    else:
        mes['whites'] = u"Legitimate"

    if mes['cnn_lstm'] == 1:
        mes['cnn_lstm'] = u"Phishing"
    elif mes['cnn_lstm'] == 0:
        mes['cnn_lstm'] = u"Legitimate"

    if mes['access'] == 1:
        mes['access'] = u"Yes"
    else:
        mes['access'] = u"No"

    if mes['mffcduf'] == 1:
        mes['mffcduf'] = u"Phishing"
    elif mes['mffcduf'] == 0:
        mes['mffcduf'] = u"Legitimate"

    return render_template('form.html', message=mes,
        domain=mes['domain'], rt=mes["register_time"],alexa=mes['alexa'],
        et=mes['expiration_date'], ns=mes['name_servers'],
        black=mes['blacks'], white=mes['whites'], cl=mes['cnn_lstm'],
        yz=mes['yz'], md=mes['mffcduf'], access=mes['access'], res=res, url=url)

"""
restful
params = {'url':url}
mes = requests.get("http://localhost:5000/check", params=params).text
"""
@app.route('/check')
def check_url():
    url = request.args['url']
    res = check2(url)
    return jsonify({"phish":res})

"""
restful
params = {'url':url}
mes = requests.get("http://localhost:5000/check", params=params).text
"""
@app.route('/check_chrome')
def check_url_chrome():
    url = request.args['url']
    return jsonify({'task': url, "hello":"world", "kitty":"dog"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)