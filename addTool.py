# @Time    : 2024/05/17
# @Author  : 斯奎匝德(Scwizard)
# @File    : addTool.py
# @Software: PyCharm
import json


# Python存钱罐的工具库
def getData():
    with open('./data') as f:
        data = f.read()
        data = json.loads(data)
        return data


def add(cat):
    # 这里传入的数据已经在主程序中验证过了，所以可以放心使用！
    data = getData()
    currentNum = int(data[cat])
    currentNum += 1
    data[cat] = currentNum
    with open('./data', 'w') as f:
        json.dump(data, f, indent=2)
        f.close()
    return True
