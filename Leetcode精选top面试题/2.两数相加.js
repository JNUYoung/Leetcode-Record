function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// the mechanism of new operator ?

const addtwoNumbers = function(l1, l2) {
    let ret_ptr = new ListNode();   // 生成返回的新链表的指针
    let ret_head = ret_ptr;    // 返回的链表的头节点指针
    let carry_val = 0;    // 进位值

    while (l1 && l2) {
        const cur_sum = l1.val + l2.val + carry_val;
        ret_ptr.next = new ListNode(cur_sum % 10);
        carry_val = cur_sum / 10;
        ret_ptr = ret_ptr.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    // l1或者l2未遍历完部分链表的起始指针
    let rest_ptr = l1 || l2;
    while (rest_ptr) {
        const cur_sum = rest_ptr.val + carry_val;
        ret_ptr.next = new ListNode(cur_sum % 10);
        carry_val = cur_sum / 10;
        ret_ptr = ret_ptr.next;
        rest_ptr = rest_ptr.next;
    }

    // 如果遍历完成后，carry的值不为0，代表最高位还需要进一位，所以需要再添加一个val为1的节点
    if (carry_val) {
        ret_ptr.next = new ListNode(val = 1);
    }

    // 头节点为空，所以从头节点的下一个节点开始
    return ret_head.next;
}

let arr = [1, 2, 3];
console.log(arr.at(-1));
// console.log(Math.random());