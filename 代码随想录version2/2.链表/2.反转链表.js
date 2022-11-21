

var reverseList = function(head) {
    let prev = null
    let cur = head

    while (cur) {
        temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    return prev
};