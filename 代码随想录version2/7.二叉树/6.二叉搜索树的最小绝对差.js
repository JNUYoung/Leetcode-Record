/**
 * leetcode530.二叉搜索树的最小绝对差
 * 
 * 二叉搜索树最大的特点就是有序性，因此可以想象成在一个有序数组上求差值
 * 对二叉搜索树进行中序遍历生成的就是一个升序的数组
 */

// 方法一：将二叉搜索树转换为有序数组，遍历数组统计最小差值

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// method 1
var getMinimumDifference = function(root) {
    const arr = []
    const getArr = (root) => {
        if (!root) return
        getArr(root.left)
        arr.push(root.val)
        getArr(root.right)
    }
    getArr(root)
    let minDistance = Infinity
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < minDistance) {
            minDistance = arr[i] - arr[i - 1]
        }
    }
    return minDistance
};

// method 2
var getMinimumDifference = function(root) {
    let res = Infinity
    let prev = null
    const traversal = (cur) => {
        if (!cur) return 
        traversal(cur.left)
        if (prev) {
            res = Math.min(Math.abs(prev.val - cur.val), res)
        }
        prev = cur
        traversal(cur.right)
    }
    traversal(root)
    return res
}