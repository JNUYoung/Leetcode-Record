/**
 * leetcode 27.移除元素
 * 
 *  明确快慢指针的含义
 */

const removeElement = function(nums, val) {
    // 快指针用来查找数组中不等于val的元素
    // 慢指针用来表示快指针指向元素插入的位置
    let slow = 0, fast = 0
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))