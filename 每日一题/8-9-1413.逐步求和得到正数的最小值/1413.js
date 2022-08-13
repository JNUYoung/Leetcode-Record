/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-09 21:53:37
 * @LastEditTime: 2022-08-09 21:57:26
 * @FilePath: \LEETCODE\1413.逐步求和得到正数的最小值\1413.js
 */


function minStartValue(nums) {
    let current_res = 0;
    let minSum = 0;
    for (let item in nums) {
        current_res += item;
        minSum = Math.min(current_res,minSum);
    }
    return (1-minSum)>1 ? (1-minSum) : 1;
}

console.log(minStartValue([-3,2,-3,4,2]))