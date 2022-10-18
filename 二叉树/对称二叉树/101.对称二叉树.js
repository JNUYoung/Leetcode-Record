// 101.对称二叉树


// wrong version
// var isSymmetric = function(root) {
//     if (!root) return true;
//     const queue = [root];

//     while (queue.length) {
//         let length = queue.length;
//         let left = 0, right = length - 1;
//         while (left < right) {
//             if (queue[left].val !== queue[right].val) {
//                 return false;
//             }
//             left++;
//             right--;
//         }
//         while (length--) {
//             const temp = queue.shift();
//             queue.push(temp.left ? temp.left : null);
//             queue.push(temp.right ? temp.right : null);
//         }
//     }
//     return true;
// }


// 递归方法
var isSymmetric = function(root) {
    // 定义比较函数，用于比较两个节点是否相等
    function compare(leftNode, rightNode) {
        // 判断存在节点为空的情况
        if (!leftNode && rightNode) return false;
        else if (leftNode && !rightNode) return false;
        else if (!leftNode && !rightNode) return true;
        // 排除掉空节点的情况，判断两个节点的val是否相等
        else if (leftNode.val !== rightNode.val) return false;
        
        // 左右节点均不为空，且左右节点的val相等，此时才做递归，判断下一层的节点
        // 1.判断左子树的左节点 和 右子树的右节点
        const outside = compare(leftNode.left, rightNode.right);
        // 2.判断左子树的右节点 和 右子树的左节点
        const inside = compare(leftNode.right, rightNode.left);
        return outside && inside;
    }

    if (!root) return true;
    return compare(root.left, root.right);
}


// 迭代方法
var isSymmetric = function(root) {
    if (!root) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length) {
        const leftNode = queue.shift();
        const rightNode = queue.shift();
        // 如果左右节点都为空，则是对称的
        if (!leftNode && !rightNode) continue;
        // 如果左右节点存在一个为空，或者，左右节点都不为空但是val不同，则不对称，返回false
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;

        // 将左子树的左节点和右子树的右节点推入队列
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        // 将左子树的右节点和右子树的左节点推入队列
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }

    return true;
}