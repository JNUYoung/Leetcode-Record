/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-26 14:44:09
 * @LastEditTime: 2022-08-26 14:46:46
 * @FilePath: \young_leetcode\每日一题\8-26-1464.数组中两元素的最大乘积\1464.js
 */

const maxProduct = function(nums) {
    let max_element = 0, second_max_element = 0;

    for (const item of nums) {
        if (item >= max_element) {
            second_max_element = max_element;
            max_element = item;
        } else {
            if (item >= second_max_element) {
                second_max_element = item;
            }
        }
    }

    return (max_element - 1) * (second_max_element - 1);
}

console.log(maxProduct([1,4,2,6]))
