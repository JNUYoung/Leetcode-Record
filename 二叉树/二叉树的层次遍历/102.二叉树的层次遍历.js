// definition of binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// level order travel
// 分层输出
var levelOrderTravel = function(root) {
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
        while (n--) {
            const temp_node = queue.shift();    // 出队
            temp_ans.push(temp_node.val);
            temp_node.left && queue.push(temp_node.left);
            temp_node.right && queue.push(temp_node.right);
        }
        ans.push(temp_ans);
    }
    return ans;
}


let a = [[1,2], [3,4]];
console.log(a.reverse());