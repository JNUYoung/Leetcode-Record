'''
Description: 
Author: young
Date: 2022-08-31 09:21:35
LastEditTime: 2022-08-31 09:27:41
FilePath: \young_leetcode\哈希表\349.两个数组的交集\349.py
'''

def intersection(nums1, nums2):
    set1 = list(set(nums1))
    set2 = list(set(nums2))
    map1 = {}
    res = []

    for i in range(len(set1)):
        map1[set[i]] = 1
    
    for i in range(len(set2)):
        if set2[i] in map1:
            res.append(set2[i])
    
    return res


# simple
def intersection1(nums1, nums2):
    return list(set(nums1) & set(nums2))