'''
Description: 给定一个按非递减顺序排序的整数数组nums，返回每个数字的平方
组成的新数组，要求也按非递减顺序排序
Author: young
Date: 2022-08-18 13:54:35
LastEditTime: 2022-08-18 14:25:53
FilePath: \young_leetcode\数组\5.有序数组的平方\977.有序数组的平方.py
'''
import time
# 方法一，每个元素平方后再排序
# 时间复杂度：O(n+nlogn)
# 空间复杂度：O(n)
def sortedSquares(nums):
    res = [num**2 for num in nums]
    res.sort()
    return res

start = time.time()
print(sortedSquares([-4,-1,0,3,10]))
print(sortedSquares([-7,-3,2,3,11]))
end = time.time()
print(end-start)


# 方法二：头尾双指针，利用数组已经有序的特点
# 1.如果最小值大于等于0，那么直接返回每个元素的平方即可
# 2.如果最小值小于0，那么从最小值到0的数组的前半部分，其平方后是递减的。因此，整个数据先递减再递增，呈现一个凹形
# 3.因此，让头指针从头开始遍历，尾指针从尾开始遍历，比较头尾指针所指元素的平方，将较大者平方后放入新数组的尾部
# 类似于归并排序的思想，将数组分成了两部分，然后进行归并排序
def sortedSquares(nums):
    length = len(nums)
    new_arr = [0] * length
    left, right, k = 0, length-1, length-1

    while left <= right:
        left_value = nums[left] ** 2
        right_value = nums[right] ** 2

        if left_value > right_value:
            new_arr[k] = left_value
            left += 1
        elif left_value < right_value:
            new_arr[k] = right_value
            right -= 1
        else:
            new_arr[k] = left_value
            left += 1
        k -= 1
    
    return new_arr

# test
start = time.time()
print(sortedSquares([-4,-1,0,3,10]))
print(sortedSquares([-7,-3,2,3,11]))
end = time.time()
print(end-start)


