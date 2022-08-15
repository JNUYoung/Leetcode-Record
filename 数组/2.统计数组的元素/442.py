'''
Description: 找出数组中所有出现两次的整数
Author: young
Date: 2022-08-15 19:07:26
LastEditTime: 2022-08-15 19:28:38
FilePath: \young_leetcode\数组\2.统计数组的元素\442.py
'''

from tracemalloc import start


# def findDuplicates(nums):
#     if len(nums) == 1:
#         return []
#     if len(nums) == 2 and nums[0]!=nums[1]:
#         return []
#     if len(nums) == 2 and nums[0] == nums[1]:
#         return [nums[0]]
#     # 获取数组的长度
#     length = len(nums)
#     # 遍历数组，（每个元素 mod length的结果）-1作为下标，将数组中该索引的值加上length
#     # 每个元素的值，需要取mod length之后的结果，保证后面的不被前面的影响
#     for item in nums:
#         item = item % length
#         nums[item-1] += length
    
#     # print(nums)

#     # 对nums数组的每一项元素，除以length，若商为2则代表出现两次
#     nums = [int(i/length) for i in nums]
    
#     res = []

#     for i in range(length):
#         if nums[i] == 2:
#             res.append(i+1)

#     return res


## 使用正负号作为标记
def findDuplicates(nums):
    res = []

    for item in nums:
        item = abs(item)
        if nums[item-1] > 0:
            nums[item-1] = -nums[item-1]
        else:
            res.append(item)
    
    return res


print(findDuplicates([4,3,2,7,8,2,3,1]))
print(findDuplicates([1,1]))
print(findDuplicates([1]))


"""
    因为数组中的元素要么出现一次，要么出现两次
    因此，利用正负号来表征这种二进制关系是可行的
    因此，利用数组元素的正负号来作为tag，出现一次为负数，出现两次为正数
"""