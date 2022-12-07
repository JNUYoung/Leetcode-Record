const invertTree = function(root) {
    if (!root) return null
    const queue = [root]

    while (queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            const temp = queue.shift()
            [temp.left, temp.right] = [temp.right, temp.left]
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
    }
    return root
}