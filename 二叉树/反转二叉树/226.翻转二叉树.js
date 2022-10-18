/**
 *  226.反转二叉树
 * 
 *  给定一颗二叉树的根节点root，翻转这颗二叉树，并返回其根节点
 */

// 递归
// 若root节点无左右孩子节点，则返回
// 若root节点存在孩子节点，则交换两个孩子节点


function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}



var invertTree = function(root) {
    if (!root) return null;
    // if (root.left === null && root.right === null) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
}


/**
 *  只要把每一个节点的左右孩子反转一下的遍历方式都是可以的。
 * 
 *  递归三部曲：
 *      1.确定递归函数的参数和返回值；
 *          参数即为当前传入的节点指针，返回值为当前的root节点；
 *      2.确定终止条件：
 *          当节点为空时就返回；
 *      3.确定单层递归的逻辑：
 *          前序遍历，先交换左右孩子节点，然后反转左子树，再反转右子树；
 */

// 基于层序遍历的二叉树翻转
var invertTree = function(root) {
    if (!root) return null;
    const queue = [root];

    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            const temp = queue.shift();
            [temp.left, temp.right] = [temp.right, temp.left];
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
    } 

    return root;
}
