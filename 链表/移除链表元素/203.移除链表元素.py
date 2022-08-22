'''
Description: 移除链表元素
Author: young
Date: 2022-08-22 19:53:01
LastEditTime: 2022-08-22 20:13:18
FilePath: \young_leetcode\链表\移除链表元素\203.移除链表元素.py
'''

from typing import Optional


class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next


class Solution:
    def removeElement(self, head:Optional[ListNode], val: int):
        # 设置一个虚拟头节点，使得所有节点的删除操作保持一致
        header_node = ListNode(next = head)
        # 设置一个指针，初始指向头节点
        pointer = header_node

        while pointer.next != None:
            if pointer.next.val == val:
                pointer.next = pointer.next.next
            else:
                pointer = pointer.next
        
        return header_node.next