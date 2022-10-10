
var averageOfLevels = function(root) {
    const ans = [], queue = [];
    if (!root) {
        return ans;
    }
    // 首先将根节点入队
    queue.push(root);

    // 每次记录队列中元素数目（当前深度的节点数目）
    // 出队一个节点时，检查其是否有左右孩子节点，若有则将它们入队
    while (queue.length) {
        const temp_ans = [];
        let n = queue.length;
        while (n) {
            const temp_node = queue.shift();    // 出队
            temp_ans.push(temp_node.val);
            if (temp_node.left) {
                queue.push(temp_node.left);
            };
            if (temp_node.right) {
                queue.push(temp_node.right);
            }
            n--;    // 当前层，每出队一个元素，要让n减1
        }
        ans.push((temp_ans.reduce((prev, cur) => prev + cur, 0)) / temp_ans.length);
    }
    return ans;
};