# -*- coding:utf-8 -*-
from flask import Flask
from flask import request
from flask import render_template, jsonify
import requests

#from miaoxuefeng.check import check, check2
from check import check, check2
app = Flask(__name__,template_folder="templates/build",static_folder="templates/build/static",static_url_path="/templates/build/static")

@app.route('/', methods=['GET'])
def signin_form():
    return render_template('index.html')

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
        res = u"正常网站!"
    else:
        res = u"钓鱼网站!"

    if mes['blacks'] != "":
        res = u"钓鱼网站!"
    if mes['whites'] != "":
        res = u"正常网站!"

    if mes['alexa'] == "":
        mes['alexa'] = "None"
    if mes['blacks'] == "":
        mes['blacks'] = u"未命中"
    else:
        mes['blacks'] = u"钓鱼网站"

    if mes['whites'] == "":
        mes['whites'] = u"未命中"
    else:
        mes['whites'] = u"正常网站"

    if mes['cnn_lstm'] == 1:
        mes['cnn_lstm'] = u"钓鱼网站"
    elif mes['cnn_lstm'] == 0:
        mes['cnn_lstm'] = u"正常网站"

    if mes['access'] == 1:
        mes['access'] = u"可访问"
    else:
        mes['access'] = u"不可访问"

    if mes['mffcduf'] == 1:
        mes['mffcduf'] = u"钓鱼网站"
    elif mes['mffcduf'] == 0:
        mes['mffcduf'] = u"正常网站"

    return render_template('index.html', message=mes,
        domain=mes['domain'], rt=mes["register_time"],alexa=mes['alexa'],
        et=mes['expiration_date'], ns=mes['name_servers'],
        black=mes['blacks'], white=mes['whites'], cl=mes['cnn_lstm'], cl_scor=mes["cnn_lstm_score"],
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