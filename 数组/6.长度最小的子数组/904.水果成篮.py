'''
Description: 
Author: young
Date: 2022-08-19 10:21:08
LastEditTime: 2022-08-19 11:15:41
FilePath: \young_leetcode\数组\6.长度最小的子数组\904.水果成篮.py
'''

# def totalFruit(fruits) -> int:
#     # 维护存储滑动窗口区间的list
#     temp_list = set()
#     # 定义慢指针
#     left = 0
#     # 维护最大的序列长度
#     max_length = 0
#     # 列表长度
#     length = len(fruits)

#     # for right in range(length):
#     #     temp_list.append(fruits[right])
#     #     while len(list(set(temp_list))) > 2:
#     #         temp_list = []
#     #         left = right - 1
#     #         right -= 1

#     #     max_length = max(max_length, right-left+1)


#     # return max_length

#     for right in range(length):
#         temp_list.add(fruits[right])
#         while len(temp_list) > 2:
#             # 将集合转换为列表
#             temp_list = list(temp_list)
#             start = temp_list[1]
#             del temp_list[0]
#             left = fruits.index(start)
#             temp_list = set(temp_list)
#             continue
#         max_length = max(max_length,right-left)
    
#     return max_length


# print(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))


# 方法一：按块扫描，将连续的相同的元素组合成块（元素值，连续出现的次数）
import collections
from turtle import tracer
from typing import Counter


def totalFruit(fruits):
    length = len(fruits)
    new_list = []
    
    i = 0
    while i < length:
        current_num = 1
        current_item = fruits[i]
        j = i + 1
        while fruits[j] == current_item:
            current_num += 1
            j += 1
        i += current_num
        new_list.append([current_item,current_num])
    
    return new_list


print(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))



# 滑动窗口
def totalFruits(tree):
    left = 0
    res = 0
    count = collections.Counter()

    # 移动right指针
    for right,value in enumerate(tree):
        count[value] += 1
        # 此while循环用于：
        # 当滑动区间包含三种类型的水果时，将最开始的left指针所指向的水果全部删除
        while len(count) > 2:
            # 将左指针指向的元素从集合中删去
            count[tree[left]] -= 1
            # 如果左指针的元素被全部删除后，将这个key也删除
            if count[tree[left]] == 0:
                del count[tree[left]]
            left += 1
        
        res = max(res, right - left + 1)
    
    return res

'''
    1.滑动窗口的含义：最长的包含两种不同“类型”的列表的子序列
    2.起始指针的含义：表明子序列中第一种类型的起始位置【删除时使用】
    3.终止指针的含义：表明子序列中第二种类型的终止位置

    当滑动窗口中包含第三种类型时，此时终止指针指向的元素为第三种元素。
    因此，需要将起始指针移动到原来的第二种类型（也即现在的第一种类型）的起始元素的位置。
'''
        

