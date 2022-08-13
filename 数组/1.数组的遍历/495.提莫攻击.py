'''
Description: 
Author: young
Date: 2022-08-11 20:09:08
LastEditTime: 2022-08-11 20:23:04
FilePath: \LEETCODE\数组\1.数组的遍历\495.提莫攻击.py
'''


# 输入：timeSeries = [1,4] 表示提莫攻击的时间  duration = 2 表示每次攻击中毒的持续时间
# 输出：总中毒时间

def findPoisonedDuration(timeSeries, duration: int) -> int:
    ans, expired = 0, 0
    for i in range(len(timeSeries)):
        if timeSeries[i] >= expired:
            ans += duration
        else:
            ans += timeSeries[i] + duration - expired
        expired = timeSeries[i] + duration
    return ans


print(findPoisonedDuration([1,2],2))

