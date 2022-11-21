function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * 1.理清楚交换的次序，预先存储必要的节点指针信息防止指针丢失
 * 2.确定遍历的终止条件，只有还剩偶数个节点时才继续遍历
 */

var swapPairs = function(head) {
    const vHeadNode = new ListNode()
    vHeadNode.next = head
    let cur = vHeadNode

    while (cur.next && cur.next.next) {
        let temp1 = cur.next
        let temp2 = cur.next.next.next

        cur.next = cur.next.next
        cur.next.next = temp1
        temp1.next = temp2

        cur = cur.next.next
    }

    return vHeadNode.next
}