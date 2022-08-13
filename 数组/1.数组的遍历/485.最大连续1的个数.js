/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-10 20:30:49
 * @LastEditTime: 2022-08-10 20:33:46
 * @FilePath: \LEETCODE\数组\1.数组的遍历\485.最大连续1的个数.js
 */


const findMaxConsecutiveOnes = function(nums) {
    let temp_nums = 0;
    let max_nums = 0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i]===1) {
            temp_nums += 1;
        } else {
            max_nums = temp_nums>max_nums?temp_nums:max_nums;
            temp_nums = 0;
        }
    }
    return temp_nums>max_nums?temp_nums:max_nums;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))