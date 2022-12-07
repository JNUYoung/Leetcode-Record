/**
 * leetcode700.二叉搜索树中的搜索
 * 
 * 二叉搜索树具有的有序性，使得其遍历时比普通的二叉树要简单得多
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const searchBST = function(root, val) {
    if (!root || root.val === val) return root;
    return searchBST(root.val > val ? root.left : root.right, val)
}