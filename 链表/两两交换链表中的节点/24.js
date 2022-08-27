/*
 * @Description: in javascript for leetcode 24
 * @Author: young
 * @Date: 2022-08-27 15:04:01
 * @LastEditTime: 2022-08-27 15:11:22
 * @FilePath: \young_leetcode\链表\两两交换链表中的节点\24.js
 */

function ListNode(val, next) {
    this.val = (val === undefined? 0:val);
    this.next = (next === undefined? null:next);
}


const swapPairs = function(head) {
    let my_head_node = new ListNode(val=0, next=head);
    let current_ptr = my_head_node;

    while (current_ptr.next && current_ptr.next.next) {
        let temp_node_one = current_ptr.next;
        let temp_node_two = current_ptr.next.next.next;

        current_ptr.next = current_ptr.next.next;
        current_ptr.next.next = temp_node_one;
        temp_node_one.next = temp_node_two;

        current_ptr = current_ptr.next.next;
    }

    return my_head_node.next;
}