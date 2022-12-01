function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

// 前序遍历：先遍历根节点，再遍历左子树和右子树
const preorderTraversal = function(root) {
    const res = []
    const dfs = function(root) {
        if (root === null) return
        res.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return res
}