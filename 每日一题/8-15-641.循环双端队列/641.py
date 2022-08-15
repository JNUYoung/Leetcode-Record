'''
Description: 
Author: young
Date: 2022-08-15 14:27:22
LastEditTime: 2022-08-15 15:09:42
FilePath: \young_leetcode\每日一题\8-15-641.循环双端队列\641.py
'''

class MyCircularDeque:
    # based on circular queue
    # front represents the start of queue
    # rear represents the end of queue
    def __init__(self,k):
        self.front = 0
        self.rear = 0
        # multiply k+1 means that k+1 is the capacity of queue including an empty one
        # so that the empty/full judgement of queue could be diffientiated
        self.elements = [0]*(k+1)

    def insertFront(self,value):
        # 判满
        if self.isFull():
            return False
        self.front = (self.front-1)%len(self.elements)
        self.elements[self.front] = value
        return
    
    def insertLast(self,value):
        if self.isFull():
            return False
        self.elements[self.rear] = value
        self.rear = (self.rear + 1) % len(self.elements)
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():
            return False
        self.front = (self.front + 1) % len(self.elements)
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():
            return False
        self.rear = (self.rear - 1) % len(self.elements)
        return True

    def getFront(self) -> int:
        return -1 if self.isEmpty() else self.elements[self.front]

    def getRear(self) -> int:
        return -1 if self.isEmpty() else self.elements[(self.rear - 1) % len(self.elements)]

    def isEmpty(self) -> bool:
        return self.rear == self.front

    def isFull(self) -> bool:
        return (self.rear + 1) % len(self.elements) == self.front

    
    

    

    