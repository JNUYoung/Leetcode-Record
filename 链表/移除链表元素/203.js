/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-22 20:26:38
 * @LastEditTime: 2022-08-22 20:31:40
 * @FilePath: \young_leetcode\链表\移除链表元素\203.js
 */

// 链表节点的构造函数
function ListNode(val, next) {
    this.val = (val === undefined ? 0:val);
    this.next = (next === undefined ? null:next);
}

const removeElements = function(head, val) {
    const head_node = new ListNode(0, head);
    let pointer = head_node;

    while (pointer.next) {
        if (pointer.next.val === val) {
            pointer.next = pointer.next.next;
            continue;
        }
        pointer = pointer.next;
        
    } 

    return head_node.next;
}

console.log(removeElements([1,2,6,3,4,5,6],6))