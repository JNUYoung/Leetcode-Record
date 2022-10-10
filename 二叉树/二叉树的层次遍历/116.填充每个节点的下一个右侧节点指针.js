/**
 * 116.填充每个节点的下一个右侧节点指针
 * difficulty: middle
 * 
 * description: 给定一个完美二叉树，即所有叶子节点都在同一层，每个父节点都有两个子节点
 * 
 * 将二叉树的每层的节点从左到右进行链接，相当于每层的节点构成一个链表
 */

/**
 * 1.对二叉树进行层次遍历；
 * 2.遍历每层的过程中，将上一个节点的next指向下一个节点，一直到倒数第二个节点；
 */


// definition of node
function Node(val, left, right, next) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}


var connect = function(root) {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        // 当前层的节点数目
        let n = queue.length;
        // 遍历这n个节点，让它们依次出队
        for (let i = 0; i < n; i++) {
            let temp = queue.shift();
            // 如果出队的不是最后一个节点，则让该出队的节点的next指向下一个出队的节点
            if (i < n - 1) {
                temp.next = queue[0];
            }
            // 出队后，要将该节点的左右子节点（如果有）入队
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
    }
    // 返回根节点
    return root;
}
// 就可以直接从左子节点访问右子节点
// 根节点访问左节点，若有左节点，则依次访问next到null
// 若没有左节点，则访问右节点， 依次访问next到null