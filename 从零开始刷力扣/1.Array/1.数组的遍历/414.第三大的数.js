/**
 * 414.第三大的数
 * 
 * 给定一个非空数组，返回此数组中第三大的数，如果不存在，则返回数组中最大的数
 * 
 */

var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a, b) => b - a);
    return nums.length > 2 ? nums[2] : nums[0];
}


// 第k大的数
var kMaxNumber = function(nums, k) {
    if (!Array.isArray(nums)) {
        throw new TypeError("Expected Array, but got " + typeof nums);
    }
    nums = [...new Set(nums)].sort((a, b) => b - a);
    return nums.length >= k ? nums[k - 1] : nums[0];
}

