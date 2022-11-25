/**
 * leetcode 15.三数之和
 * 给定整数数组nums，判断是否存在三元组nums[i],nums[j],nums[k]
 * 在i，j，k互不相等的情况下三元组的和为0
 */

// 如何去重？

//! 双指针

const threeSum = function(nums) {
    const res = []
    const n = nums.length
    nums.sort((a, b) => a - b)    // 将nums数组升序排序
    
    for (let i = 0; i < n -2; i++) {
        let left = i + 1, right = n - 1
        if (nums[i] > 0) return res
        if (nums[i] === nums[i - 1]) continue    // 去重

        while (left < right) {
            let curSum = nums[i] + nums[left] + nums[right]
            if (curSum > 0) {
                right--
            }  else if (curSum < 0) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            }
        }
    }
    return res
}



let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))
let nums1 = [0,1,1]
console.log(threeSum(nums1))
let nums2 = [0,0,0]
console.log(threeSum(nums2))
let nums3 = [-2,0,1,1,2]
console.log(threeSum(nums3))