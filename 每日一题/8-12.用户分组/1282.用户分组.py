'''
Description: 1282 用户分组 难度中等
Author: young
Date: 2022-08-12 11:19:53
LastEditTime: 2022-08-12 14:08:17
FilePath: \LEETCODE\每日一题\8-12.用户分组\1282.用户分组.py
'''


# 首先遍历groupSizes中的每一个元素，将同样的元素的下标存储到字典中；
# 字典的key即代表某一类分组，value代表该类分组的用户id
# 若key不等于value的数目，则有len(value)/key个分组
# 将value中的元素依次取key个出来即可


def groupThePeople(groupSizes):
    res_map = {}
    res_list = []

    for i in range(len(groupSizes)):
        if groupSizes[i] in res_map:
            res_map[groupSizes[i]].append(i)
        else:
            res_map[groupSizes[i]] = [i]
    # print(res_map)
    
    for key,value in res_map.items():
        if (key==len(value)):
            res_list.append(value)
        else:
            i = 0
            while i < len(value):
                temp_arr = value[i:i+key]
                res_list.append(temp_arr)
                i = i + key           

    return res_list    


print(groupThePeople([3,3,3,3,3,1,3]))

# 问题的关键：如何确定一共有多少个组


{
    3:[0,1,2,3,4,6],
    1:[5]
}


