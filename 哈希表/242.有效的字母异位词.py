'''
Description: 
Author: young
Date: 2022-08-28 15:59:12
LastEditTime: 2022-08-28 16:01:52
FilePath: \young_leetcode\哈希表\242.有效的字母异位词.py
'''
class Solution(object):
    def isAnagram(self, s, t):

        s_map, t_map = {}, {}

        if (len(s) != len(t)):
            return False
        
        for ch in s:
            if ch in s_map:
                s_map[ch] += 1
            else:
                s_map[ch] = 1
        for ch in t:
            if ch in t_map:
                t_map[ch] += 1
            else:
                t_map[ch] = 1
        
        return s_map == t_map

