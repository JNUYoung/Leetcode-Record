'''
Description: 
Author: young
Date: 2022-08-19 15:55:31
LastEditTime: 2022-08-19 17:16:02
FilePath: \young_leetcode\数组\6.长度最小的子数组\76.最小覆盖子串.py
'''

import collections
from operator import truediv


def minWindow(s: str, t: str) -> str:
    res = 0
    min_length = len(s) + 1000
    # t字符串的hash table
    hash_t = {}

    def meetCondition(hash1, hash2):
        count = 0
        length = len(list(hash2.keys()))
        for key in list(hash2.keys()):
            if key in hash1 and hash1[key] >= hash2[key]:
                count += 1
        
        if count == length:
            return True
        else:
            return False

    # 获取子串的各个元素出现的次数
    for ch in t:
        if ch not in hash_t:
            hash_t[ch] = 1
        else:
            hash_t[ch] += 1
    
    hash_s = {}
    left = 0
    # 获取滑动窗口内的各个元素出现的次数
    for right in range(len(s)):
        if s[right] not in hash_s:
            hash_s[s[right]] = 1
        else:
            hash_s[s[right]] += 1
        # 满足的条件：当t中的每个key都能在s中找到，且s[key]>=t[key]
        # 如果满足条件
        while meetCondition(hash_s,hash_t):
            min_length = min(min_length, right-left+1)
            hash_s[s[left]] -= 1
            if hash_s[s[left]] == 0:
                del hash_s[s[left]]
            left += 1

    return s[left:right+1]


print(minWindow("ADOBECODEBANC","ABC"))


print(collections.Counter('ABC'))
print(len("ADOBECODEBANC"))


def minWindow(s: str, t: str) -> str:
    # 维护字符串t的各个元素的hash表
    # 维护字符串s的滑动窗口内的各个元素的hash表

    score = 0    # 计数hash_t的各个key是否都包含在了hash_s之中，若len(hash_t.keys()) == score 则包含，否则不全包含
    hash_t = collections.Counter(t)
    start, end = len(s), 10*len(s)    # 随机初始化起点和终点，只要比字符串长就可以

    hash_s = {}
    deq = collections.deque([])    # 维护一个双端队列

    # 枚举s中的字符
    for index, ch in enumerate(s):
        if ch in hash_t:
            deq.append(index)
            hash_s[ch] = hash_s.get(ch, 0) + 1
            if hash_s[ch] <= hash_t[ch]:
                score += 1
            