/**
 * 2022-11-18
 * 
 * 977.有序数组的平方
 */

// 双指针模拟归并
var sortedSquares = function(nums) {
    // 创建一个新的数组用于填充
    const res = new Array(nums.length).fill(0)
    let n = nums.length

    let i = 0, j = n - 1
    while (i <= j) {
        if (nums[i]**2 >= nums[j]**2) {
            res[n - 1] = nums[i]**2
            i++
        } else {
            res[n-1] = nums[j]**2
            j--
        }
        n--
    }
    return res
}

let arr = [-7,-3,2,3,11]
console.log(sortedSquares(arr))