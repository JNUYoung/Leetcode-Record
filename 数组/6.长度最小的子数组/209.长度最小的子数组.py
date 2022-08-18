'''
Description: 
Author: young
Date: 2022-08-18 14:26:50
LastEditTime: 2022-08-18 15:25:39
FilePath: \young_leetcode\数组\6.长度最小的子数组\209.长度最小的子数组.py
'''

# def minSubArrayLen(target: int, nums) -> int:
#     length = len(nums)
#     res = [0, 0, length+1]

#     for i in range(length):
#         temp_res = []
#         temp_sum = nums[i]
#         for j in range(i+1,length):
#             temp_sum += nums[j]
#             if temp_sum >= target:
#                 temp_res = [i,j,j-i+1]
#                 break
#         if len(temp_res)!=0 and temp_res[-1] < res[-1]:
#             res = temp_res
    
#     return res[-1]


# # test
# print(minSubArrayLen(7,[2,3,1,2,4,3]))


# 滑动窗口 - 利用一次循环完成两次循环才能做到的事情
# 1.初始化left指针和right指针均指向第一个元素，维护一个记录当前窗口包含元素的和的变量current_sum，维护一个res，记录最小序列长度
# 2.循环移动right指针，将right指针指向的元素的值加到current_sum中
# 3.判断当前current_sum是否大于等于target：
#       - 若大于target，意味着这是当前左指针不动的情况下，最小的数组长度。因此，此时需要移动左指针left
#               - 移动左指针后，要把左指针指向的元素的值从current_sum中减掉，更新res
#       - 若小于等于target，意味着还没满足条件，继续移动right指针，将元素的值加入current_sum中
#   
# 4.返回res

def minSubArrayLen(target, nums):
    left = 0
    current_sum = 0
    res = len(nums) + 1000

    # i 即代表右指针
    for i in range(len(nums)):
        current_sum += nums[i]

        ## while循环内为关键的代码
        ## 只要当前窗口的和大于目标值，那么就不断地将左指针后移，更新最小的长度
        while current_sum >= target:
            res = min(res, i-left+1)
            current_sum -= nums[left]
            left += 1
    
    return 0 if res==len(nums)+1000 else res

print(minSubArrayLen(7,[2,3,1,2,4,3]))
print(minSubArrayLen(11,[1,1,1,1,1,1,1]))