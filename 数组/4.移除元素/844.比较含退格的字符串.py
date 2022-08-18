'''
Description: 
Author: young
Date: 2022-08-17 20:39:43
LastEditTime: 2022-08-17 21:01:12
FilePath: \young_leetcode\数组\4.移除元素\844.比较含退格的字符串.py
'''

'''
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
注意：如果对空文本输入退格字符，文本继续为空。
'''

# 方法一：使用一个空数组模拟stack，当遇到#时，将栈顶元素出栈（如果非空）或者什么都不做（如果为空栈）
#         对s和t执行完栈操作后，比较两个返回的数组是否相等来做出判断

# import operator, operator.eq(res1,res2) 用于比较两个列表，数字，或字符串等的大小关系
# T = O(m + n)
# S = O(m + n)

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def my_stack(my_string):
            _stack = []
            for ch in my_string:
                if ch == '#':
                    if len(_stack) == 0:
                        continue
                    else:
                        _stack.pop()
                else:
                    _stack.append(ch)
            return _stack
        
        res1 = my_stack(s)
        res2 = my_stack(t)

        return True if res1 == res2 else False


solution = Solution().backspaceCompare


s = "ab#c"
t = "ad#c"
print(solution(s,t))
