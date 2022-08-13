'''
Description: BubbleSort
Author: young
Date: 2022-08-12 09:44:28
LastEditTime: 2022-08-12 09:55:07
FilePath: \LEETCODE\排序算法\bubblesort.py
'''

a = [3,2,7,1,-4]

# 冒泡排序：每一趟排序完成后，都有一个最大的元素排到最后（从前往后），或最小的元素排到最前面（从后往前）
# 因此，总共需要数组长度大小次的排序循环过程，每次循环时，判断前后两个元素的大小
# 排序完成的条件：某一趟排序的过程中，没有元素发生位置交换（终止条件）

# 1.排序算法的思想
# 2.排序算法的特点
# 3.排序算法的终止条件

def BubbleSort(arr):
    for i in range(len(arr)):
        # 该次循环是否有元素交换位置
        flag = False
        # j从0开始，到数组下标的-2的位置
        for j in range(len(arr)-1):
            if arr[j]>arr[j+1]:
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp

                flag = True
        
        if not flag:
            break
    
    return arr


print(BubbleSort(a))