'''
Description: 
Author: young
Date: 2022-08-17 15:14:02
LastEditTime: 2022-08-17 17:15:13
FilePath: \young_leetcode\数组\4.移除元素\27.移除元素.py
'''


'''
    给定一个数组nums和一个val，原地移除数组中所有数值等于val的元素，并返回移除后数组的新长度
    不要使用额外的数组空间，必须使用O(1)额外空间并原地修改输入数组
'''

# 暴力方法，双重循环
from multiprocessing.sharedctypes import Value


def removeElement(nums, val):
    length = len(nums)
    for i in range(length):
        if nums[i] == val:
            for j in range(i+1, length):
                nums[j-1] = nums[j]
            i -= 1
            length -= 1
    return length


# 双指针，快慢指针
'''
    - 快指针，通常为用于循环的变量，寻找新数组的元素
    - 慢指针，指向更新新数组下标的位置
    - 循环过程中，不断地将快指针指向的元素 覆盖到 慢指针指向的元素 
'''
def removeElement(nums, val):
    slow_ptr = 0

    for fast_ptr in range(len(nums)):
        if (nums[fast_ptr] != val):
            nums[slow_ptr] = nums[fast_ptr]
            slow_ptr += 1
    
    return slow_ptr


# 二分法？
'''
    思路：元素的顺序可以发生改变，因此：
    1.左指针用来找到第一个等于目标值的元素；
    2.右指针从后往前找到最后一个不等于目标值的元素；
    3.交换左右指针所指的元素
    4.当左右指针指向同一元素时：
        4.1 如果该元素等于目标值，则返回左指针或右指针的值
        4.2 如果该元素不等于目标值，则返回左指针+1 或 右指针+1
'''
def removeElement(nums, val):
    left = 0
    right = len(nums)-1

    while left <= right:
        while left < right and nums[left] != val:
            left += 1
        while left < right and nums[right] == val:
            right -= 1
        nums[left], nums[right] = nums[right], nums[left]

        # 终止条件
        if left == right:
            if nums[left] == val:
                return left
            else:
                return left + 1


# test
print(removeElement([0,1,2,2,3,0,4,2],2))


'''
    删除数组后，数组在内存空间中所占的空间还是保持不变的。
    只是编程语言内置的计数器以及所定义的接口，能够返回删除后的数组的大小
'''