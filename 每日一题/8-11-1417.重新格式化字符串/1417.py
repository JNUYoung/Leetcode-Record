'''
Description: 
Author: young
Date: 2022-08-11 19:17:19
LastEditTime: 2022-08-11 19:57:22
FilePath: \LEETCODE\每日一题\8-11-1417.重新格式化字符串\1417.py
'''

# 输入：混合了数字和小写字母的字符串（可能有，可能没有）
# 输出：任意相邻字符不为同一类型的字符串，无法格式化则返回空串

def reformat(s: str) -> str:
    number_list = []
    char_list = []
    return_list = []
    for i in s:
        if i.isdigit():
            number_list.append(i)
        else:
            char_list.append(i)
    
    # 如果字符串总长度为偶数
    if (len(s)%2==0):
        if len(number_list)==len(char_list):
            # 执行插入操作
            for i in range(len(number_list)):
                return_list.append(number_list[i])
                return_list.append(char_list[i])
        else:
            return ""
    # 如果字符串总长度为奇数
    else:
        if abs(len(number_list)-len(char_list)) == 1:
            # 执行插入操作
            i = 0
            # while i<min(len(number_list),len(char_list)):
            #     return_list.append(number_list[i])
            #     return_list.append(char_list[i])
            #     i += 1
            # if len(number_list)>len(char_list):
            #     return_list.append(number_list[i])
            # else:
            #     return_list.append(char_list[i])
            if len(number_list) > len(char_list):
                while i < len(char_list):
                    return_list.append(number_list[i])
                    return_list.append(char_list[i])
                    i+=1
                return_list.append(number_list[i])
            else:
                while i < len(number_list):
                    return_list.append(char_list[i])
                    return_list.append(number_list[i])
                    i+=1
                return_list.append(char_list[i])
        else:
            return ""
    
    return "".join(return_list)


print(reformat('a0b1c2'))

# method 2
def _reformat(s):
    numbers_nums,char_nums = 0,0
    for ch in s:
        if ch.isdigit():
            numbers_nums += 1
        else:
            char_nums += 1
    
    if abs(numbers_nums - char_nums) > 1:
        return ""
    
    i,j = 0,0
    res = [0]*(numbers_nums + char_nums)

    # 如果数字多
    if numbers_nums > char_nums:
        j += 1
    # 如果字母多
    else:
        i += 1
    
    for ch in s:
        if ch.isdigit():
            res[i] = ch
            i += 2
        else:
            res[j] = ch
            j += 2
    
    return "".join(res)


print(_reformat("covid2019"))