/**
 * leetcode142.环形链表Ⅱ
 * 
 * 给定一个链表的头节点head，返回链表开始入环的第一个节点
 */

var detectCycle = function(head) {
    const m = new Map()
    let ptr = head
    
    while (ptr) {
        if (!m.has(ptr)) {
            m.set(ptr, true)
            ptr = ptr.next
        } else {
            return ptr
        }
    }
    return null
}


// https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#%E6%80%BB%E7%BB%93
var detectCycle = function(head) {
    let slow = head, fast = head
    // 通过快慢指针，找到两个指针在环中的交点
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        // 找到相遇的位置后，让一个指针从该位置出发，另一指针从头节点处出发，它们的相遇位置的节点即为环形的入口节点
        if (slow === fast) {
            let ptr1 = slow, ptr2 = head
            while (ptr1 !== ptr2) {
                ptr1 = ptr1.next
                ptr2 = ptr2.next
            }
            return ptr1
        }
    }
    return null
}