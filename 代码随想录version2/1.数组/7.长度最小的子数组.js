/**
 * 2022-11-18
 * 
 * 209.长度最小的子数组
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。找出该数组中满足其和 ≥ target 的长度最小的连续子数组并返回其长度。
 * 如果不存在符合条件的子数组则返回0
 */

const minSubArrayLen = function(target, nums) {
    let left = 0
    let res = nums.length + 1
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            // 判断是否需要更新当前的最小长度
            let cur_len = right - left + 1
            res = res < cur_len ? res : cur_len
            // 收缩左侧的窗口边界
            sum -= nums[left++]
        }
    }

    // 判断是否
    return res > nums.length ? 0 : res
}

console.log(minSubArrayLen(4, [1,4,4]))