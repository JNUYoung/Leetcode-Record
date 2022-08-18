'''
Description: https://leetcode.cn/problems/move-zeroes/submissions/
Author: young
Date: 2022-08-17 20:18:05
LastEditTime: 2022-08-17 20:34:38
FilePath: \young_leetcode\数组\4.移除元素\283.py
'''

class Solution:
    def moveZeroes(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 双指针思路，类似于冒泡排序，将0逐渐从前面冒泡到数组末尾
        # slow - fast指针指向的非零元素插入新数组的位置
        # fast - 指向数组中的非零元素

        slow = 0

        for fast in range(0,len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
        
        return nums


