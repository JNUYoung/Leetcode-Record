
const postOrderTraversal = function(root) {
    const res = [];
    const dfs = function(root) {
        if (root === null) return;
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    }

    dfs(root);

    return res;
}


// 由于后续遍历的顺序为：左右中
// 因此，迭代的过程中，顺序为中、右、左
var postorderTraversal = function(root) {
    const res = [];
    const myStack = [root];

    if (!root) return res;
    
    while (myStack.length) {
        let cur = myStack.pop();
        res.push(cur.val);
        cur.right && res.push(cur.right.val);
        cur.left && res.push(cur.left.val);
    }

    return res.reverse();
}