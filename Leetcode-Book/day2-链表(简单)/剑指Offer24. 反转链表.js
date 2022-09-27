function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 方法一：遍历迭代（双指针）
var reverseList = function(head) {
    let prev = null;
    let cur = head;

    while (cur) {
        let next_node = cur.next;    // 保存当前节点的 后一个节点
        cur.next = prev;    // 让当前节点 指向 前一个节点
        prev = cur;    // 让prev指针指向当前节点
        cur = next_node;
    }

    return prev;
}

// 递归写法
var reverseList = function(head) {
    var recur = function(cur, prev) {
        if (cur === null) return prev;
        let res = recur(cur.next, cur);
        cur.next = prev;
        return res;
    }

    return recur(head, null)
}