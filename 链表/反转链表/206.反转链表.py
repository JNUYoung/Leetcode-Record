'''
Description: 
Author: young
Date: 2022-08-26 14:47:32
LastEditTime: 2022-08-26 15:06:17
FilePath: \young_leetcode\链表\反转链表\206.反转链表.py
'''

class ListNode:
    def __init__(self, val= 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head):
        prev = None
        cur = head

        while (cur):
            temp_node = cur.next
            cur.next = prev
            prev = cur
            cur = temp_node
        
        return prev
