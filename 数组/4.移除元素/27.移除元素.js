/*
 * @Description: test
 * @Author: young
 * @Date: 2022-08-17 16:30:27
 * @LastEditTime: 2022-08-17 16:39:59
 * @FilePath: \young_leetcode\数组\4.移除元素\27.移除元素.js
 */

var removeElement = function(nums,val) {
    let length = nums.length;

    for (let i=0; i<length; i++) {
        if (nums[i] === val) {
            for (let j = i+1; j<length; j++) {
                nums[j-1] = nums[j];
            }
            length--;
            i--;
        }
    }

    return length;
}

var removeElement = function(nums,val) {
    let slow_ptr = 0;

    for (let quick_ptr =0; quick_ptr<nums.length; quick_ptr++) {
        if (nums[quick_ptr] != val) {
            nums[slow_ptr] = nums[quick_ptr];
            slow_ptr ++;
        }
    }

    return slow_ptr;
}

// 慢指针指向元素插入新数组的位置
// 快指针寻找不等于val的元素

// test
console.log(removeElement([0,1,2,2,3,0,4,2],2))