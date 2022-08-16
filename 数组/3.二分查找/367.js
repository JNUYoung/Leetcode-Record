/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-16 10:45:29
 * @LastEditTime: 2022-08-16 10:45:31
 * @FilePath: \young_leetcode\数组\3.二分查找\367.js
 */
/**
 * @param {number} num
 * @return {boolean}
 */
 const isPerfectSquare = function(num) {
    let left = 1, right = num;

    while (left <= right) {
        let mid = parseInt((left + right)/2);

        if (mid**2 === num) {
            return true;
        } else if (mid**2 > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};