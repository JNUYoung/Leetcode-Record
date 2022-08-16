'''
Description: simple
Author: young
Date: 2022-08-16 09:18:54
LastEditTime: 2022-08-16 09:30:19
FilePath: \young_leetcode\每日一题\8-16-1656.设计有序流\1656.py
'''

class OrderedStream():

    def __init__(self,n):
        # 由于要求指针的初始值为1，因此，将整个流的长度初始化为n+1，第一位留空，从第二位也就是下标1开始，从而使得编码更加方便
        self.stream = [""] * (n+1)
        self.ptr = 1

    def insert(self,idKey,value):
        """
            idKey:插入的id-value对的id值
            value:插入的id-value对的value值
        """
        self.stream[idKey] = value
        res = []
        while self.ptr < len(self.stream) and self.stream[self.ptr]:
            res.append(self.stream[self.ptr])
            self.ptr += 1
        
        return res
        


