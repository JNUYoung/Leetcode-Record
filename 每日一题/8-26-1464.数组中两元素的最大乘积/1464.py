'''
Description: 
Author: young
Date: 2022-08-26 14:33:25
LastEditTime: 2022-08-26 14:42:28
FilePath: \young_leetcode\每日一题\8-26-1464.数组中两元素的最大乘积\1464.py
'''

def maxProduct(nums):
    arr = [i - 1 for i in nums]
    arr.sort()

    return arr[-1] * arr[-2]

print(maxProduct([3,4,5,2]))
print(maxProduct([1,5,4,5]))
print(maxProduct([3,7]))


# 本质上就是寻找最大的元素和第二大的元素

def _maxProduct(nums):
    max_element = 0
    second_element = 0

    for i in range(len(nums)):
        if nums[i] >= max_element:
            second_element = max_element
            max_element = nums[i]
        else:
            if nums[i] >= second_element:
                second_element = nums[i]
    
    return (max_element-1) * (second_element-1)

print(_maxProduct([3,4,5,2]))
print(_maxProduct([1,5,4,5]))
print(_maxProduct([3,7]))