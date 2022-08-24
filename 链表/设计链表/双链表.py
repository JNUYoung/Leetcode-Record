'''
Description: 
Author: young
Date: 2022-08-23 16:00:36
LastEditTime: 2022-08-23 16:13:10
FilePath: \young_leetcode\链表\设计链表\双链表.py
'''

# 定义双链表中的节点
class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.prev = None
        self.next = None


class MyLinkedList():
    def __init__(self):
        self._head = ListNode()
        self._tail = ListNode()
        self._head.next = self._tail
        self._tail.prev = self._head
        self._count = 0

    def get(self, index):
        if 0 <= index < self._count:
            pointer = self._head
            for i in range(index):
                pointer = pointer.next
            return pointer.val
        else:
            return -1
    
    def addAtHead(self, val):
        newNode = ListNode(val=val)
        newNode.next = self._head.next
        self._head.next = newNode
        newNode.next.prev = newNode
        newNode.prev = self._head
    
    def addAtTail(self, val):
        newNode = ListNode(val=val)
        newNode.next = self._tail
        newNode.prev = self._tail.prev
        newNode.prev.next = newNode
        self._tail.prev = newNode
    
    
    def addAtIndex(self, index, val):
        if index < 0:
            index = 0
        
        if index > self._count:
            return
        
