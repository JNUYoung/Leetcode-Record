/**
 * 35.搜索插入位置
 * 
 * 给定排序数组,在数组中找到目标值,并返回索引.若不存在于数组中,返回其按顺序插入的位置.
 */

// 目的: 在一个有序数组中找到第一个大于等于target的下标

const searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

let arr = [1, 3, 5, 6]
let target = 7
console.log(searchInsert(arr, target))