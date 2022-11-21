// definition of linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

const removeElement = function(head, val) {
    let virtualHead = new ListNode()
    virtualHead.next = head

    let prev = virtualHead
    let cur = head

    while (cur !== null) {
        if (cur.val === val) {
            temp = cur.next
            prev.next = temp
            cur = prev.next
        } else {
            prev = prev.next
            cur = cur.next
        }
    }

    return virtualHead.next
}



//!! recursive
// 链表的定义具有递归的形式
const removeElements = function(head, val) {
    // 递归终止条件
    if (head === null) {
        return head
    }
    head.next = removeElements(head.next, val)
    return head.val === val ? head.next : head
}

const removeElement_f = function(head, val) {
    const VHead = new ListNode()
    VHead.next = head
    let ptr = VHead

    while (ptr.next !== null) {
        if (ptr.next.val === val) {
            temp = ptr.next.next
            ptr.next = temp
        } else {
            ptr = ptr.next
        }
    } 

    return VHead.next
}