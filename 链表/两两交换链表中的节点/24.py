'''
Description: leetcode 24.两两交换链表中的节点，middle
Author: young
Date: 2022-08-27 14:49:41
LastEditTime: 2022-08-27 15:22:23
FilePath: \young_leetcode\链表\两两交换链表中的节点\24.py
'''

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# principle one：add a virtual head node to uniform the manipulation
# principle two：确定链表节点之间链接或断开链接的先后次序
# principle three：确定先后次序后，将需要用到的但是暂时被孤立的节点临时保存


#! 假设初始为 [1, 2, 3, 4]
class Solution:
    def swapPairs(self, head):
        # 定义一个虚拟头节点，指向链表中的第一个节点，既可以统一操作，返回时也可以直接通过virtual_head.next获取链表中的真正头节点
        my_head_node = ListNode(next=head)
        #! now : [my_head_node, 1, 2, 3, 4]
        # 两两交换的终止条件：当前交换完后，剩余链表中：（1）仅剩一个节点；或（2）无节点；
        current_ptr = my_head_node

        # 临时保存节点，即要断开的节点
        temp_node_one = current_ptr.next     #! temp_node_one = 1
        temp_node_two = current_ptr.next.next.next    #! temp_node_two = 3

        while (current_ptr.next and current_ptr.next.next):
            current_ptr.next = current_ptr.next.next     # head -> 2
            current_ptr.next.next.next = temp_node_one   # 2->1
            temp_node_one.next = temp_node_two           # 1->3
            # 此时已经完成交换，且顺利链接到后面剩余的链表中，因此直接让指针后移两位即可
            current_ptr = current_ptr.next.next

        return my_head_node.next



# 递归
def swapPairs(head):
    if not head or not head.next:
        return head
    one = head
    two = head.next
    three = two.next

    two.next = one
    one.next = swapPairs(three)

    return two
    
