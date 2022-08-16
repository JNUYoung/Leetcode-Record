'''
Description: 
Author: young
Date: 2022-08-16 10:43:05
LastEditTime: 2022-08-16 10:43:13
FilePath: \young_leetcode\数组\3.二分查找\367.有效的完全平方数.py
'''

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left = 1
        right = num

        while (left <= right):
            mid = int((left + right) / 2)
            if mid**2 == num:
                return True
            elif mid**2 > num:
                right = mid - 1
            else:
                left = mid + 1
        
        return False