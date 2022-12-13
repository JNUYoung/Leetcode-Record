/**
 * leetcode376.摆动序列
 */

const wiggleMaxLength = function(nums) {
    if (nums.length <= 1) return nums.length
    // [a, b, c, ......] curDiff-c和b的差值，prevDiff-b和a的差值 
    let curDiff = 0, prevDiff = 0
    let res = 1

    // 遍历序列，判断前后之间的差值是否变号
    for (let i = 0; i < nums.length; i++) {
        curDiff = nums[i + 1] - nums[i]
        if (curDiff > 0 && prevDiff <=0 || curDiff <= 0 && prevDiff > 0) {
            res++
            prevDiff = curDiff
        }
    }

    return res
}