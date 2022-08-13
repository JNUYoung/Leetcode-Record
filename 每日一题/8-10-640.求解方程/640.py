'''
Description: 
Author: young
Date: 2022-08-10 13:28:19
LastEditTime: 2022-08-10 14:51:39
FilePath: \LEETCODE\每日一题\8-10-640.求解方程\640.py
'''
# 输入字符串形式的方程，返回方程的解

# example equation : "x+5-3+x=6+x-2"

def solveEquation(equation):
    # 移项，将等式右侧各项移到左侧，需要取相反数
    # 需要存储变量x的系数factor、常量的和val、最后的结果即为-val/factor
    factor = 0
    val = 0
    # i:遍历字符串的指针变量
    # length:字符串的长度
    # sign:符号位，1表示等号左侧、-1表示等号右侧
    i = 0
    length = len(equation)
    sign = 1

    # 遍历字符串每一位
    while i < length:
        if (equation[i]=='='):
            # change signal
            sign = -1
            i += 1
            continue

        # 获取当前项的符号
        s = sign
        if equation[i] == "+":
            i += 1
        if equation[i] == '-':
            # 取相反数
            s = -s
            i += 1
        
        # number记录数字项
        num = 0
        valid = False
        # 当前项是数字
        while i < length and equation[i].isdigit():
            valid = True
            # 因为是按字符进行拆分，因此若出现一个三位数例如123，i则会往后继续遍历三位
            # 因此，每遍历一位则在当前基础上乘10，当遍历到非数字位时，结果为((1*10)+2)*10+3=123
            num = num*10 + int(equation[i])     # ???
            # 若是数字，则还需要检查下一位是否为x，若为x，则将数字num加入x的系数factor当中，若不是数字，则加入到数字项的和val当中
            i += 1

        # 当前项是变量x
        if i < length and equation[i] == 'x':
            factor += s*num if valid else s
            i += 1
        else:
            val += s*num
        
    if factor == 0:
        return "No solution" if val else "Infinite solutions"
    
    return f"x={-val // factor}"

print(solveEquation("x+5-3+x=6+x-2"))

        