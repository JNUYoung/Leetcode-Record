/**
 * leetcode239.滑动窗口最大值
 * 
 * 给定一个整数数组nums，有一个大小为k的滑动窗口从数组最左侧移动到数组最右侧。
 * 滑动窗口每次只向右移动一位，返回滑动窗口中的最大值
 */


var maxSlidingWindow = function (nums, k) {
    const ans = []
    const queue = []    // 队列长度始终为k

    const maxNum = function (nums) {
        let ans = -Infinity
        for (const num of nums) {
            if (num > ans) {
                ans = num
            }
        }
        return ans
    }

    for (const num of nums) {
        if (queue.length < k) {
            queue.push(num)
        } else {
            ans.push(maxNum(queue))
            queue.shift()
            queue.push(num)
        }
    }
    ans.push(maxNum(queue))

    return ans
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1], 1))



var maxSlidingWindow = function (nums, k) {
    const queue = []
    const n = nums.length

    // queue存储的是元素在原数组中的索引
    // 首先先将原数组中的前k个元素入队
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)
    }

    // 此时，queue中存储的索引对应的元素是递减的
    const res = [queue[0]]

    for (let i = k; i < n; i++) {
        // 1.判断新加入的元素是否大于队列末尾的元素，若大于则将队列末尾的元素弹出，保证queue中下标对应元素始终递减
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)

        // 判断上一个窗口中的最大元素是否在当前窗口内
        while (queue[0] + k <= i) {
            queue.shift()
        }

        res.push(nums[queue[0]])
    }

    return res
}