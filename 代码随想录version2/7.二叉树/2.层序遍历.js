function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}


const levelOrderTraverse = function(root) {
    const ans = []
    if (!root) return ans

    const queue = [root] 
    while (queue.length) {
        let n = queue.length    // 当前层的元素个数
        while (n--) {
            const curLevelAns = []
            const tempNode = queue.shift()
            curLevelAns.push(tempNode.val)
            tempNode.left && queue.push(tempNode.left)
            tempNode.right && queue.push(tempNode.right)
        }
        ans.push(curLevelAns)
    }
    return ans
}