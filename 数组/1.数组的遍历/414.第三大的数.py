'''
Description: 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
Author: young
Date: 2022-08-12 15:56:01
LastEditTime: 2022-08-12 16:06:40
FilePath: \LEETCODE\数组\1.数组的遍历\414.第三大的数.py
'''

def thirdMax(nums):
    nums.sort()
    nums.reverse()
    res = list(set(nums))
    
    return res[2] if len(res)>3 else res[0]

print(thirdMax([3,2,1]))