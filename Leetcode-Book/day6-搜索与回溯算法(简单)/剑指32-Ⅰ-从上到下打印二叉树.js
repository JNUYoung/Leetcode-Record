// 二叉树节点定义
function BTNode(val, left, right) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? left : null;
}

// 层次遍历
var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let temp_node = queue.shift();
        res.push(temp_node.val);
        if (temp_node.left) queue.push(temp_node.left);
        if (temp_node.right) queue.push(temp_node.right);
    }

    return res;
}