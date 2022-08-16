/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-16 10:17:20
 * @LastEditTime: 2022-08-16 10:23:44
 * @FilePath: \young_leetcode\数组\3.二分查找\704.js
 */

const search = function(nums,target) {
    let left = 0, right = nums.length-1;
    let middle = 0;
    
    while (left <= right) {
        middle = parseInt((left + right) / 2);
        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
}

// 1.数组无重复元素
// 2.数字已经有序

// 二分法的一个关键在于确定边界条件；此处需要保持区间不变性；要么所有的区间都是左闭右闭，要么所有都是左闭右开
