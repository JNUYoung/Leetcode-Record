/**
 * 剑指offer 06. 从尾到头打印链表
 * 
 * 
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reversePrint = function(head) {
    let res = [], ptr = head;
    while (ptr !== null) {
        res.push(ptr.val);
        ptr = ptr.next;
    }

    return res.reverse();
}


// 利用辅助栈
// var reversePrint = function(head) {
    
// }

// console.log();