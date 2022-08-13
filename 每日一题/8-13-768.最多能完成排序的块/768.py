'''
Description: 768.最多能完成排序的块   hard
Author: young
Date: 2022-08-13 15:19:40
LastEditTime: 2022-08-13 16:20:39
FilePath: \LEETCODE\每日一题\8-13-768.最多能完成排序的块\768.py
'''

test_example = [2,1,3,4,4]

# 错误的解法

# def maxChunkToSorted(arr):
#     # arr.append(0)
#     length = len(arr)
#     i = 0
#     res_chunks_list = []

#     current_chunk = []
#     while i < length-1:
#         current_chunk.append(arr[i])
    
#         if arr[i+1] < max(current_chunk):
#             i += 1
#         else:
#             res_chunks_list.append(current_chunk)
#             current_chunk = []
#             i += 1
#     if len(current_chunk)!=0:
#         res_chunks_list.append(current_chunk)

#     if max(res_chunks_list[-1])>arr[-1]:
#         res_chunks_list[-1].append(arr[-1])
#     else:
#         res_chunks_list.append([arr[-1]])

#     return len(res_chunks_list)

# 最初的思路
# 要求最多的分块数目，因此，要保证每一块内部的元素数目最少
# 因此，遍历数组，当后一项比当前项小时，即可添加到同一块中，当后一项大于等于当前项时，添加到一个新的块中
        



# 官方解答1：使用排序加哈希表

# 原数组 arr, 原数组排序后的数组 sortedArr
# 同时从左向右遍历原数组和排序之后的数组
# 建立一个哈希表来维护遍历时的两个列表的各元素的频次的差距
# 临界条件：当哈希表中所有key的value都为0时，记录当前遍历的下标 k
# 然后重新初始化一个空哈希表重复上述过程

def officialSolution(arr):
    length = len(arr)
    sortedArr = sorted(arr)
    res = 0
    temp_hash = {}
    
    for i in range(length):
        if arr[i] not in temp_hash.keys():
            temp_hash[arr[i]] = 0
            temp_hash[arr[i]] += 1
        else:
            temp_hash[arr[i]] += 1
        
        if sortedArr[i] not in temp_hash.keys():
            temp_hash[sortedArr[i]] = 0
            temp_hash[sortedArr[i]] -= 1
        else:
            temp_hash[sortedArr[i]] -= 1
        
        if arr[i] in temp_hash.keys() and temp_hash[arr[i]] == 0:
            del temp_hash[arr[i]]
        if sortedArr[i] in temp_hash.keys() and temp_hash[sortedArr[i]] == 0:
            del temp_hash[sortedArr[i]]
        
        if len(temp_hash) == 0:
            res += 1
    
    return res
        






# print(maxChunkToSorted(test_example))


# python中的sorted方法可以对列表、元组等进行排序并返回一个新的副本
a = sorted(test_example)
print(test_example,a)

print(officialSolution(test_example))

# conclusion
# 当比较两个序列时，可以通过第三方的数据结构来存储两者的差异
