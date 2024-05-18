# @Time    : 2024/05/15
# @Author  : 斯奎匝德(Scwizard)
# @File    : main.py
# @Software: PyCharm

# Python存钱罐
from flask import Flask, render_template, send_from_directory
import json

import addTool
import rmTool

app = Flask(__name__)
app.config['FILES'] = 'templates'

global coin
global paper
coin = ['dot_one_coin', 'dot_five_coin', 'one_coin']
paper = ['one_paper', 'five_paper', 'ten_paper', 'twenty_paper', 'fifty_paper', 'hundred_paper']


def getData():
    with open('./data') as f:
        data = f.read()
        data = json.loads(data)
        return data


def getSum():
    data = getData()
    var1 = float(data['dot_one_coin'])
    var2 = float(data['dot_five_coin'])
    var3 = int(data['one_coin'])
    var4 = int(data['one_paper'])
    var5 = int(data['five_paper'])
    var6 = int(data['ten_paper'])
    var7 = int(data['twenty_paper'])
    var8 = int(data['fifty_paper'])
    var9 = int(data['hundred_paper'])
    total = str(
        var1 * 0.1 + var2 * 0.5 + var3 * 1 + var4 * 1 + var5 * 5 + var6 * 10 + var7 * 20 + var8 * 50 + var9 * 100)
    return total


#  让Flask变成一个文件服务器
@app.route('/<path:filename>', strict_slashes=False)
def templates(filename):
    return send_from_directory(app.config['FILES'], filename)


@app.route('/', strict_slashes=False)
def index():
    data = getData()
    return render_template('index.html', DOTONECOINNUM=data['dot_one_coin'], DOTFIVECOINNUM=data['dot_five_coin'],
                           ONECOINNUM=data['one_coin'], ONEPAPERNUM=data['one_paper'], FIVEPAPERNUM=data['five_paper'],
                           TENPAPERNUM=data['ten_paper'], TWENTYPAPERNUM=data['twenty_paper'],
                           FIFTYPAPERNUM=data['fifty_paper'], HUNDREDPAPERNUM=data['hundred_paper'], TOTAL=getSum())


# 实现添加
@app.route('/add/<cat>', strict_slashes=False)
def add(cat):
    if cat in coin or cat in paper:
        addTool.add(cat)
        return '成功！'
    else:
        return Error('Failed!')


# 实现移除
@app.route('/rm/<cat>', strict_slashes=False)
def rm(cat):
    if cat in coin or cat in paper:
        rmTool.rm(cat)
        return '成功！'
    else:
        return Error('Failed!')


def Error(content):
    #  报错
    return render_template('error.html', ERROR_CONTENT=content)


if __name__ == "__main__":
    app.run(port=80, host='0.0.0.0', debug=True)
