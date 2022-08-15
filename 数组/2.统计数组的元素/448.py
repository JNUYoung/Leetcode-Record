'''
Description: 找到所有数组中消失的数字
Author: young
Date: 2022-08-15 16:53:56
LastEditTime: 2022-08-15 17:14:00
FilePath: \young_leetcode\数组\2.统计数组的元素\448.py
'''

"""
    1.根据nums的长度，创建一个新的包含1到n的数组
    2.找出新数组包含但是旧数组不包含的元素，作为数组返回
"""
def findDisappearedNumbers(nums):
    return list(set([i+1 for i in range(len(nums))]).difference(set(nums)))


print(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
print(findDisappearedNumbers([1,1]))