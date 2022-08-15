/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-15 17:14:11
 * @LastEditTime: 2022-08-15 18:28:30
 * @FilePath: \young_leetcode\数组\2.统计数组的元素\448.js
 */


// const findDisappearedNumbers = function(nums) {
//     const length = nums.length;
//     const new_arr = [];
//     nums = nums.sort();
    
//     for (let i=0;i<length;i++) {
//         new_arr.push(i+1);
//     }

//     let i = 0;
//     const res = [];

//     while (i<length) {
//         if (new_arr[i] !== nums[i]) {
//             res.push(new_arr[i]);
//             i++;
//         }
//         i++;
//     }

//     return res;
// } 

const findDisappearedNumbers = function(nums) {
    for (const num of nums) {
        nums[num-1] = -Math.abs(nums[Math.abs(num)-1]);
    }

    console.log(nums)

    const res = [];

    for (let i=0;i<nums.length;i++) {
        if (nums[i]>0) {
            res.push(i+1);
        }
    }

    return res;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

