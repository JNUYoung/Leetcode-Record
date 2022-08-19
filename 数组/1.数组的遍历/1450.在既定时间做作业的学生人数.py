'''
Description: simple
Author: young
Date: 2022-08-19 10:07:04
LastEditTime: 2022-08-19 10:13:57
FilePath: \young_leetcode\数组\1.数组的遍历\1450.在既定时间做作业的学生人数.py
'''

'''
    给定两个整数数组，分别表示第i个同学做作业的开始时间和结束时间
    给定一个查询时间queryTime，返回该时刻正在做作业的学生的人数
'''

def busyStudent(startTime, endTime, queryTime):
    # 直接对endtime进行遍历
    # 只有endtime>=queryTime时才有可能处于查询时间内
    # 此时再判断startTime是否<=queryTime即可

    j, res = 0, 0
    
    for j in range(len(endTime)):
        if endTime[j] >= queryTime:
            if startTime[j] <= queryTime:
                res += 1
    
    return res

'''
    方法一：枚举
    需要满足的条件为startTime<=queryTime<=endTime
    遍历所有学生的起始时间和结束时间，统计符合条件的学生总数即可

    const busyStudents = function(startTime, endTime, queryTime) {
        let res = 0;

        for (let j = 0; j < endTime.length; j++) {
            if (endTime[j] >= queryTime) {
                if (startTime[j] <= query) {
                    res += 1;
                }
            }
        }

        return res;
    }
'''

