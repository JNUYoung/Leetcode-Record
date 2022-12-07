/**
 * leetcode98.验证二叉搜索树
 */

// 通过中序遍历将二叉搜索树转换为数组，判断数组是否严格单调递增
const isValidBST = function(root) {
    const traverseRes = []
    (function traverse(root) {
        if (!root) return;
        traverse(root.left)
        traverseRes.push(root.val)
        traverse(root.right)
    })(root)
    for (let i = 1; i < traverseRes.length; i++) {
        if (traverseRes[i] <= traverseRes[i - 1]) return false
    }
    return true
}