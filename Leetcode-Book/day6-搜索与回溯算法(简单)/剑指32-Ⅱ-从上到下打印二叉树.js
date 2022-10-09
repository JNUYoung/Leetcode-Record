/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let level_res = [];
        let n = queue.length;    // 二叉树当前层的节点数目
        // 分层输出的关键
        // 因为上一轮已经把所在层的所有节点都放入了队列之中了
        while (n) {
            let temp = queue.shift();
            level_res.push(temp.val);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
            n--;
        }
        res.push(level_res);
    }
    return res;
};