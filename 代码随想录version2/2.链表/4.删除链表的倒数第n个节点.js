function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * 利用快慢指针实现删除链表中倒数第n个元素
 * 
 * 1.先让快指针向后移动n位
 * 2.让快指针继续移动，若快指针未到达最后一个元素，则让慢指针也后移一位
 * 3.当快指针到达最后一位时，此时慢指针的下一个元素即是要删除的元素，让slow.next = slow.next.next即完成了删除操作
 * 
 * 核心思想：
 *      让快慢指针之间保持一个差值n，这样当快指针到了末尾，就能通过慢指针找到倒数第n个元素
 */

var removeNthFromEnd = function (head, n) {
    // 设置虚拟头节点
    let vHead = new ListNode()
    vHead.next = head
    let fastPtr = vHead
    let slowPtr = vHead
    // 移动快指针n位
    for (let i = 0; i < n; i++) {
        fastPtr = fastPtr.next
    }
    // 移动快指针直至指向末尾元素
    while (fastPtr.next) {
        fastPtr = fastPtr.next
        slowPtr = slowPtr.next
    }
    // 慢指针下一个节点即为倒数第n个节点，将其删除
    slowPtr.next = slowPtr.next.next
    // 虚拟头节点未变化过，返回实际头节点
    return vHead.next
};