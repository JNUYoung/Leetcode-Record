'''
Description: 
Author: young
Date: 2022-08-24 10:47:12
LastEditTime: 2022-08-24 11:13:28
FilePath: \young_leetcode\每日一题\8-24-1460.通过翻转子数组使两个数组相等\1460.py
'''

# 最开始的想法：编写一个反转子数组的函数，然后每次将一个目标元素反转到指定位置
# 问题的本质：
#   1.一个数组内的任意两个元素的位置是否均能交换？——答案是可以的
#   2.既然任意两个元素都能互相交换，那么就可以进行任意的排列
#   因此，该问题的等价问题：两个数组的元素是否一致
#   
#   思路1：利用dict，比较两个字典的key-value是否保持一致
#   思路2：利用排序，然后比较两个数组的元素是否一致

def canBeEqual(target, arr) -> bool:
    target_dict, arr_dict = {}, {}
    for item in target:
        if item not in target_dict:
            target_dict[item] = 1
        else:
            target_dict[item] += 1
    
    for item in arr:
        if item not in arr_dict:
            arr_dict[item] = 1
        else:
            arr_dict[item] += 1
    
    return target_dict == arr_dict


print(canBeEqual(target = [1,2,3,4], arr = [2,4,1,3]))

dict_a = {
    1: 2,
    2: 3,
    3: 4
}

dict_b = {
    1: 2,
    2: 3,
    3: 4,
    4: 5
}

print(dict_a == dict_b)


# 
def canBeEqual_alt(target, arr) -> bool:
    return target.sort() == arr.sort()
    
print(canBeEqual_alt(target = [1,2,3,4], arr = [2,4,1,3]))