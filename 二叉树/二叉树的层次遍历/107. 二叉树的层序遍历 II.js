/**
 * 107. 二叉树的层序遍历 II
 * 
 * 从最底层向上，逐层从左到右访问节点
 * 逆序层次遍历
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 方法一：先正常从上到下遍历，再将遍历的结果反转
 var levelOrderBottom = function(root) {
    const ans = [], queue = [];
    if (!root) {
        return ans;
    }
    // 首先将根节点入队
    queue.push(root);

    // 每次记录队列中元素数目（当前深度的节点数目）
    // 出队一个节点时，检查其是否有左右孩子节点，若有则将它们入队
    while (queue.length) {
        const temp_ans = [];
        let n = queue.length;
        while (n) {
            const temp_node = queue.shift();    // 出队
            temp_ans.push(temp_node.val);
            if (temp_node.left) {
                queue.push(temp_node.left);
            };
            if (temp_node.right) {
                queue.push(temp_node.right);
            }
            n--;    // 当前层，每出队一个元素，要让n减1
        }
        ans.push(temp_ans);
    }
    return ans.reverse();
};

