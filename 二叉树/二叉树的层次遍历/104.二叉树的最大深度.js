/**
 * 104.二叉树的最大深度
 * 
 * 给定一个二叉树，找出其最大深度
 */

// 层次遍历的方法，每遍历完一层，让深度depth+1
var maxDepth = function(root) {
    let depth = 0;
    const queue = [];
    if (!root) return depth;
    queue.push(root);

    while (queue.length) {
        let length = queue.length;
        while (length--) {
            const temp = queue.shift();
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
        depth += 1;
    }

    return depth;
}


// 递归方法：
// 只要存在孩子节点，就让深度加一，递归的过程中取最大值
var maxDepth = function(root) {
    return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}