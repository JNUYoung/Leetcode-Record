'''
Description: 
Author: young
Date: 2022-08-12 16:54:37
LastEditTime: 2022-08-12 17:13:32
FilePath: \LEETCODE\数组\1.数组的遍历\628.三个数的最大乘积.py
'''

# 输入：一个整型数组nums（length>=3）
# 输出：数组中三个数组成的最大乘积

# 暴力解法/三重循环
def maximumProduct(nums):
    max_num = nums[0] * nums[1] * nums[2]
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            for k in range(j+1,len(nums)):
                max_num = max(max_num,nums[i]*nums[j]*nums[k])

    return max_num


def maximumProduct(nums):
    positive_list = []
    negative_list = []
    zero_list = []
    
    for num in nums:
        if num>0:
            positive_list.append(num)
        elif nums < 0:
            negative_list.append(num)
        else:
            zero_list.append(num)
    
    positive_list.sort()
    negative_list.sort()
    

    return 

    




# 
print(maximumProduct([-1,-2,-3]))