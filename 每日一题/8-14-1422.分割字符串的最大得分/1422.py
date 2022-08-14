'''
Description: 
Author: young
Date: 2022-08-14 13:22:38
LastEditTime: 2022-08-14 14:18:04
FilePath: \young_leetcode\每日一题\8-14-1422.分割字符串的最大得分\1422.py
'''


from cgitb import reset


class solution():
    def maxScore1(self,s):
        res = 0

        if s[0] == '0':
            res = 1 + s[1:].count('1')
        else:
            res = s[1:].count('1')
        
        score = res

        for i in range(1,len(s)-1):
            if s[i]=='0':
                score += 1
            else:
                score -= 1
            res = max(score,res)
            
        return res
    
    def maxScore2(self,s):
        return max(s[:i].count('0')+s[i:].count('1') for i in range(1,len(s)))

    def maxScore3(self,s):
        res = score = (s[0]=='0')+s[1:].count('1')
        for ch in s[1:-1]:
            score += 1 if ch == '0' else -1 
            res = max(res,score)
        return res



fun1 = solution().maxScore1
fun2 = solution().maxScore2
fun3 = solution().maxScore3

print(fun1('011101'))
print(fun1('00111'))
print(fun2('1111'))
print(fun3('00'))

# python变量的类型转换
# 列表推导表达式

