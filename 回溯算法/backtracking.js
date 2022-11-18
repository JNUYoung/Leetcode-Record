/**
 * backtracking algorithm template
 */

// combine problem
// from [1, 2, ..., n] select k elements

function combine(n ,k) {
    const result = [];
    const path = [];

    // startIndex 控制当前path递归到下一层时遍历集合的起始位置
    function backtracking(n, k, startIndex) {
        // 如果满足终止条件，则收集结果
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        // 如果还没满足终止条件，代表还没有到最后一层，因此通过for循环来遍历当前层的节点
        for (let i = startIndex; i <= n; i++) {
            path.push(i);    // 处理当前节点
            backtracking(n, k, i + 1);
            // 跳出上面的递归后，需要进行回溯
            path.pop();
        }
    }

    backtracking(n, k, 1);
    return result;
}

let res = combine(4, 2);
console.log(res);
