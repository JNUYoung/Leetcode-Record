/**
 * 链表相交
 * 
 * 给定两个单链表的头节点，找出两个单链表相交的起始节点，如果没有交点，则返回null
 */


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}


var getListLength = function(head) {
    let list_length = 0, ptr = head
    while (ptr) {
        length++
        ptr = ptr.next
    }
    return list_length
}

var getIntersectionNode = function(headA, headB) {
    // 1.得到A和B两个链表的长度
    let lengthA = getListLength(headA)
    let lengthB = getListLength(headB)

    // 2.得到A和B两个链表长度的差值
    let ptr = headA, ptr1 = headB
    let distance = Math.abs(lengthA - lengthB)

    // 3.移动用于遍历较长的链表的指针这个差值的距离，使得两个链表从指针处开始对齐
    while (distance) {
        if (lengthA > lengthB) {
            ptr = ptr.next
        } else {
            ptr1 = ptr1.next
        }
        distance--
    }

    // 4.两个指针同时向后遍历，判断是否指向同一节点
    while (ptr) {
        if (ptr === ptr1) return ptr
        else {
            ptr = ptr.next
            ptr1 = ptr1.next
        }
    }

    return null
}