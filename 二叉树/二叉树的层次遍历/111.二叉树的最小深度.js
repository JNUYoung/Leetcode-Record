var minDepth = function(root) {
    let depth = 0;
    let queue = [];
    if (!root) return depth;
    queue.push(root);

    // 这里的while循环，每一次相当于二叉树的新的一层，因此每次while开始时
    // 除了记录当前层的节点数目外,还要让深度加1
    while (queue.length) {
        let length = queue.length;
        depth += 1;
        while (length--) {
            const temp = queue.shift();
            // 遍历当前层的节点时,如果发现叶子节点,则直接返回当前深度,这就是所记录的最小的深度
            if (temp.left === null && temp.right === null) {
                return depth;
            // 如果不是叶子节点,则将其左右孩子节点(若存在)入队
            } else {
                temp.left && queue.push(temp.left);
                temp.right && queue.push(temp.right);
            }
        }
    }

    return depth;
}



/**
 * 递归
 * 
 * 1.若root节点的左右孩子都为空时,返回1;
 * 2.若root节点的左右孩子有一个为空时,则返回不为空的孩子节点的深度
 * 3.若root节点的左右孩子都不为空时,则返回左右孩子节点的较小的深度
 */

var minDepth = function(root) {
    if (!root) return 0;

    let leftMinDepth = minDepth(root.left);
    let rightMinDepth = minDepth(root.right);

    if (root.left === null && root.right === null) return 1;
    if (root.left === null || root.right === null) {
        return root.left ? leftMinDepth + 1 : rightMinDepth + 1;
    }
    if (root.left !== null && root.right !== null) {
        return Math.min(leftMinDepth, rightMinDepth);
    }
}