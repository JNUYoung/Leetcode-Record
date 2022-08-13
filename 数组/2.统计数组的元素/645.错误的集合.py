'''
Description: simple
Author: young
Date: 2022-08-13 19:49:56
LastEditTime: 2022-08-13 20:27:58
FilePath: \young_leetcode\数组\2.统计数组的元素\645.错误的集合.py
'''

# 找到重复的元素 以及 丢失的元素

# 
# 1.数组包含元素的范围在1-n
# 2.遍历数组，将每个元素出现的次数进行存储
# 3.出现次数为2的元素为重复元素
# 4.key从1到n，出现次数为0次的元素为丢失的元素


def findErrorNums(nums):
    hash_map = {}
    _repeated,_error = 0,0
    for num in nums:
        if num not in hash_map:
            hash_map[num] = 1
        else:
            hash_map[num] += 1
    
    # for key,value in hash_map.items():
    #     if value > 1:
    #         _repeated = key
    #         if key+1 in hash_map:
    #             _error = key-1
    #         else:
    #             _error = key+1

    for i in range(1,len(nums)+1):
        count = hash_map[i] if i in hash_map else 0
        if count == 2:
            _repeated = i
        if count == 0:
            _error = i
    
    return [_repeated,_error]

    
print(findErrorNums([1,2,2,4]))
print(findErrorNums([1,1]))
print(findErrorNums([3,2,3,4,6,5]))