/**
 * 515.在每个树行中找最大值
 * difficulty: middle
 * 
 * description: 给定一颗二叉树的根节点root，找出二叉树中每一层的最大值
 * 
 * 层序遍历的变体。
 * 在普通的层序遍历的基础上，得到每行的遍历结果后，找出其中的最大值；
 * 或者在遍历每行时，遇到更大的值则进行替换；
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


var largestValues = function(root) {
    const ans = [], queue = [];
    queue.push(root);

    while (root && queue.length) {
        let n = queue.length;
        let maxVal = queue[0].val;
        while (n--) {
            const temp = queue.shift();
            maxVal = temp.val > maxVal ? temp.val : maxVal;
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
        ans.push(maxVal);
    }
    return ans;
}