var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const res = [];
    const queue = [root];

    let isLeft = true;

    while (queue.length) {
        let level_res = [];
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            // 依次弹出当前队列的元素
            let temp = queue.shift();
            if (isLeft) {
                level_res.push(temp.val);
            } else {
                level_res.unshift(temp.val);
            }
            // 将弹出的元素的左右子节点加入队列
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
        res.push(level_res);
        isLeft = !isLeft;
    }

    return res;
};