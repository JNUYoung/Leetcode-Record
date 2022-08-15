'''
Description: 
Author: young
Date: 2022-08-15 15:30:23
LastEditTime: 2022-08-15 16:28:58
FilePath: \young_leetcode\数组\2.统计数组的元素\697.py
'''


'''
    1.遍历数组，将各个元素在列表中出现的索引记录在同一个数组中，并且存储到一个dict中，key为列表元素，value为key出现的索引
    2.遍历dict，找出数组长度最长的key-value
    3.输出该value的长度

    使用hash表，时间开销低，但是内存消耗大
'''

from audioop import findmax


def findShortestSubArray(nums):
    my_dict = {}
    length = len(nums)
    nums_degree = 0

    for i in range(length):
        if nums[i] not in my_dict:
            my_dict[nums[i]] = [i]
        else:
            my_dict[nums[i]].append(i)
    
    shortest_length = 0
    for key,value in my_dict.items():
        value_length = len(value)
        if value_length >= nums_degree:
            if value_length > nums_degree:
                nums_degree = value_length
                shortest_length = value[-1] - value[0] + 1
            else:
                current_length = value[-1] - value[0] + 1
                shortest_length = min(current_length,shortest_length)

        
    return shortest_length


print(findShortestSubArray([1,2,2,3,1]))
print(findShortestSubArray([1,2,2,3,1,4,2]))
print(findShortestSubArray([1,2,2,1,2,1,1,1,1,2,2,2]))


"""
    官方solution将每个元素映射到一个长度为三的数组
    [元素出现的次数，元素出现的首个位置，元素出现的末尾位置]
"""


def findShortestSubArray(nums):
    nums_dict = {}
    length = len(nums)

    for i in range(length):
        if nums[i] not in nums_dict:
            nums_dict[nums[i]] = [1,i,i]
        else:
            nums_dict[nums[i]][0] += 1
            nums_dict[nums[i]][-1] = i
    print(nums_dict)

    degree = 0
    min_length = 0
    for count,start,end in nums_dict.values():
        if count >= degree:
            if count>degree:
                degree = count
                min_length = end - start + 1
            else:
                min_length = min(end-start+1,min_length)
    
    return min_length

print(findShortestSubArray([1,2,2,3,1]))
print(findShortestSubArray([1,2,2,3,1,4,2]))
print(findShortestSubArray([1,2,2,1,2,1,1,1,1,2,2,2]))
        
