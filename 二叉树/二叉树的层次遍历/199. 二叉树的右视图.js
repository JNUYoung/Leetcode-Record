/**
 * 199. 二叉树的右视图
 * difficulty: middle
 * 
 * 给定二叉树的根节点，想象自己站在树的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值
 * 
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var rightSideView = function(root) {
    const ans = [];
    const queue = [];
    if (!root) return ans;
    queue.push(root);

    while (queue.length) {
        let n = queue.length;
        while (n) {
            const temp = queue.shift();
            // n === 1，即当前层的从左到右的最后一个元素
            // 将该元素的值加入ans数组中
            // 同理，若要得到左视图，则判断n是否等于固定住的初始长度
            if (n === 1) ans.push(temp.val);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
            n--;
        }
    }

    return ans;
}