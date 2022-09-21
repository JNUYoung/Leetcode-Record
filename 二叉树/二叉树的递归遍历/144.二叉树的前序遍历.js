/**
 * 二叉树的前序遍历：
 * 前序，中序，后序指的是遍历时对父节点的遍历；
 * 
 * 前序：先遍历父节点，然后遍历左右叶子节点
 * 中序：左叶子、父节点、右叶子
 * 后序：左叶子、右叶子、父节点
 */


// 二叉树节点的构造函数
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined? null : left;
    this.right = right === undefined ? null : right;
}


// 递归写法
const preorderTraversal = function(root) {
    const res = [];
    const dfs = function(root) {
        if (root === null) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
}



// 迭代写法
const preOrderTraversal = function(root) {
    // 存放遍历结果的数组
    const res = [];
    // 定义一个栈，对二叉树进行迭代
    const myStack = [];

    if (!root) return res;
    myStack.push(root);

    // 由于是中，左，右；栈的FILO的顺序，因此需要中，右，左，入栈，
    while (myStack.length) {
        // 弹出当前栈顶节点，并且处理该栈顶节点的左右孩子节点
        let cur = myStack.pop();
        res.push(cur.val);
        cur.right && myStack.push(cur.right);
        cur.left && myStack.push(cur.left);
    }

    return res;
}

