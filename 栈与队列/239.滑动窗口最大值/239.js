/**
 * 239.滑动窗口最大值
 * 
 * 给定整数数组nums，大小为k的滑动窗口从数组最左侧移动到最右侧，每次只移动一位；
 * 返回每个滑动窗口中的最大值；
 */

const maxSlidingWindow = function(nums, k) {
    const queue = [];
    const n = nums.length;

    // 初始化，将前k个元素输入队列
    for (let i = 0; i < k; i++) {
        // 入队前先判断一下，当前队列中的前面的元素的值是否小于当前待入队的值
        // 若小于，则弹出前面的元素，直到遇到比当前待入队的元素更大的元素
        // 目的:保证队列的单调性,队列存储的是下标,下标对应的元素的值严格单调递减
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
    }

    // 存储每个窗口的最大值的数组,初始化第一个窗口内的最大值
    const res = [nums[queue[0]]];

    // 从第k+1个元素开始,遍历到数组的末尾,重复上述操作
    // 每次遍历到新元素时,判断:
    //      1.入队前是否需要删除队尾的元素;
    //      2.入队后最大的元素是否已经不在当前窗口内;[下标 + k 是否小于等于 当前遍历的位置i]
    for (let i = k; i < n; i++) {
        // condition 1
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);

        // condition2
        while (queue[0] + k <= i) {
            // 若小于,则代表窗口已经右移了,不再包括queue[0]这个下标,因此从队列中去除
            queue.shift();
        }
        // 每次往后移动一位后,将当前单调队列的队头元素(下标)对应的数组的值写入res数组中
        res.push(nums[queue[0]]);
    }

    return res;
}