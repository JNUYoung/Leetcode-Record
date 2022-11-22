/**
 * 141.环形链表：判断链表中是否存在环
 */

// 1.利用hashmap存储遍历过的节点，若存在环，则一定会重复访问到hashmap中已有的节点，因此每次指针移动时判断其指向的节点是否已经存在在hashmap中
var hasCycle = function(head) {
    let nodeMap = new Map()
    let ptr = head
    while (ptr) {
        if (nodeMap.has(ptr)) {
            return true
        }
        nodeMap.set(ptr, 1)
        ptr = ptr.next
    }
    return false
}


// 2.快慢指针
var hasCycle = function(head) {
    let slowPtr = head
    let fastPtr = head

    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr?.next
        fastPtr = fastPtr?.next?.next
        if (slowPtr === fastPtr) {
            return true
        }
    }
    return false
}