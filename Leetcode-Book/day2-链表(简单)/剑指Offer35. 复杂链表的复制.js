/**
 * 剑指 35. 复杂链表的复制
 * 
 * 复制一个复杂链表，在复杂链表中，每个节点除了有next指针指向下一个元素外，还有一个random指针，指向链表中的任意节点或者null
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

var copyRandomList = function(head) {
    if (head === null) return null;

    let map = new Map();
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    cur = head;

    while (cur) {
        // map.get(cur).next = map.get(cur.next) ? map.get(cur.next) : null;
        // map.get(cur).random = map.get(cur.random) ? map.get(cur.random) : null;

        // 可以使用ES2020的双问号语法——空值合并运算符 ??
        // expression A ?? defaultValue    若表达式为null或undefined时，为变量设置一个默认值
        // 用了空值合并运算符，可以做到只把 null 和 undefined 替换为一个预定义的值。
        map.get(cur).next = map.get(cur.next) ?? null;
        map.get(cur).random = map.get(cur.random) ?? null;
        cur = cur.next;
    }

    return map.get(head);
}

