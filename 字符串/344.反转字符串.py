'''
Description: 
Author: young
Date: 2022-08-23 16:34:13
LastEditTime: 2022-08-23 17:03:49
FilePath: \young_leetcode\字符串\344.反转字符串.py
'''


"""
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
"""

def reverseString(s) -> None:
    length = len(s)

    left, right = 0, length - 1
    while left <= right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    
    return s

print(reverseString(['h','e','l','l','o']))
print(reverseString(['h','e','l','l','o','h']))

# a = []
# a[0:999] = 'abc'
# print(a[4])
