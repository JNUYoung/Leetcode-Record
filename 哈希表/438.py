'''
Description: 
Author: young
Date: 2022-08-30 10:03:57
LastEditTime: 2022-08-30 10:06:54
FilePath: \young_leetcode\哈希表\438.py
'''

def findAnagrams(s, p):
    s_length = len(s)
    p_length = len(p)
    res = []

    if s_length > p_length:
        return []
    
    s_list = [0] * 26
    p_list = [0] * 26

    for i in range(p_length):
        s_list[]