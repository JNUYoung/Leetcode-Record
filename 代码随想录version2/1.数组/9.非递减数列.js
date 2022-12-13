/**
 * leetcode665.非递减数列
 * 
 * 给定一个长度为n的整数数组nums，判断最多改变一个元素的情况下，该数组能否变成一个非递减数列
 */

/**
 * 三种情况
 * 1.[4, 2, 5]，当i=1时，修改i-1的值为i的值
 * 2.【1，4，2，5】,当i的值大于等于i-2的值时，修改i-1的值为i的值，这样能保证从i-2到i的元素为递增序列
 * 3.[3,4,2,5]，当i的值小于i-2的值时，此时修改i的值为i-1的值，才能保证递增
 */

const checkPossibility = function(nums) {
    if (nums.length <= 2) return true
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            count++
            if (i === 1 || nums[i] >= nums[i - 2]) {
                nums[i - 1] = nums[i]
            } else {
                nums[i] = nums[i - 1]
            }
        }
    }
    return count <= 1
}