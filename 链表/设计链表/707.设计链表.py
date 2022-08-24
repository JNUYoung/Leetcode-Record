'''
Description: 
Author: young
Date: 2022-08-23 14:52:56
LastEditTime: 2022-08-23 15:59:34
FilePath: \young_leetcode\链表\设计链表\707.设计链表.py
'''

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = None


class MyLinkedList:
    def __init__(self):
        self._head = ListNode()
        self._count = 0
    
    def get(self, index):
        # O(index)
        if 0 <= index < self._count:
            pointer = self._head
            for i in range(0, index + 1):
                pointer = pointer.next
            return pointer.val
        else:
            return -1
    
    def addAtHead(self, val):
        # O(1)
        self.addAtIndex(index = 0, val=val)

    def addAtTail(self, val):
        # O(n)
        self.addAtIndex(index=self._count, val=val)
    
    def addAtIndex(self, index, val):
        # O(index)
        if index < 0:
            index = 0
        
        if index > self._count:
            return
        
        self._count += 1
        pred = self._head
        for _ in range(index):
            pred = pred.next
        
        newNode = ListNode(val)
        newNode.next = pred.next
        pred.next = newNode
    
    def deleteAtIndex(self, index):
        # O(index)
        if index < 0 or index >= self._count:
            return
        
        self._count -= 1
        pred = self._head

        for _ in range(index):
            pred = pred.next
        
        pred.next = pred.next.next