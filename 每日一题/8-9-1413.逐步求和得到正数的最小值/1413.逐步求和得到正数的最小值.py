'''
Description: 8-9 leetcode每日一题
Author: young
Date: 2022-08-09 21:28:14
LastEditTime: 2022-08-09 22:06:33
FilePath: \LEETCODE\每日一题\8-9-1413.逐步求和得到正数的最小值\1413.逐步求和得到正数的最小值.py
'''
# 输入一个整数数组，选定任意正数作为初始值，从左到右遍历数组并累加到初始值，始终保证和大于等于1，输出满足该条件的最小正数


# 方法1：要保证sum始终≥1，则要保证startValue + minSum >= 1，因此要保证startValue >= 1-minSum
#        因此，只要得到了数组nums的最小值，取max(1,1-minSum)即可
def minStartValue(nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # input : array
        # output: any positive number
        current_res = nums[0]
        minSum = current_res
        for item in range(1,len(nums)):
            current_res += nums[item]
            minSum = min(current_res,minSum)
        return 1-minSum if (1-minSum)>1 else 1


example = [-3,2,-3,4,2]
print(minStartValue(example))



# 方法2：
