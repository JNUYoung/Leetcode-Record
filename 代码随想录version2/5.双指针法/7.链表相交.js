/**
 * 160.相交链表
 * 
 * 给定两个单链表的头节点headA和headB，找出并返回两个单链表相交的起始节点，如果不存在相交节点则返回null
 */

const getIntersectionNode = function (headA, headB) {
    let lengthA = 0, lengthB = 0
    let ptr1 = headA, ptr2 = headB

    while (ptr1) {
        lengthA++
        ptr1 = ptr1.next
    }

    while (ptr2) {
        lengthB++
        ptr2 = ptr2.next
    }
    ptr1 = headA, ptr2 = headB
    const dist = Math.abs(lengthA - lengthB)
    // 链表A的长度大于链表B的长度
    if (lengthA > lengthB) {
        for (let i = 0; i < dist; i++) {
            ptr1 = ptr1.next
        }
    }
    // 链表B的长度大于链表A的长度
    if (lengthB > lengthA) {
        for (let i = 0; i < dist; i++) {
            ptr2 = ptr2.next
        }
    }
    // 对齐后开始判断
    while (ptr1) {
        if (ptr1 === ptr2) {
            return ptr1
        } else {
            ptr1 = ptr1.next
            ptr2 = ptr2.next
        }
    }
    return null
}