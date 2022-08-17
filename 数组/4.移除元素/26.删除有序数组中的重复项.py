'''
Description: 删除有序数组中的重复项，simple
Author: young
Date: 2022-08-17 17:05:23
LastEditTime: 2022-08-17 17:14:10
FilePath: \young_leetcode\数组\4.移除元素\26.删除有序数组中的重复项.py
'''

def removeDuplicates(nums):
    # 如果数组的长度等于0，无重复元素
    # 如果数组的长度等于1，无重复元素
    # 因此，从数组的第二个元素开始检查是否有重复元素
    slow = 1

    # 快指针用于检查前后两项是否相等
    # 若相等，则慢指针保持不懂，快指针+1，直到找到前后两项不等
    # 若不等，则将快指针的值赋给慢指针，慢指针+1
    for quick in range(1,len(nums)):
        if nums[quick-1] != nums[quick]:
            nums[slow] = nums[quick]
            slow += 1
        
        return slow


# 明确两个指针的含义