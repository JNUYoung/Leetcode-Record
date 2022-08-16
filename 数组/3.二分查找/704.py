'''
Description: 
Author: young
Date: 2022-08-16 10:10:15
LastEditTime: 2022-08-16 10:17:15
FilePath: \young_leetcode\数组\3.二分查找\704.py
'''


# 有序数组 - 二分法
def search(nums,target):
    left = 0
    right = len(nums)-1

    while left <= right:
        mid = int(left+right) / 2
        if (nums[mid] > target):
            right = mid - 1
        elif nums[mid] < target:
            left = mid + 1
        else:
            return mid
    
    return -1
    
    
