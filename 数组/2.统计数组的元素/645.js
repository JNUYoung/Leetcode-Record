/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-13 20:29:49
 * @LastEditTime: 2022-08-13 20:36:34
 * @FilePath: \young_leetcode\数组\2.统计数组的元素\645.js
 */


const findErrorNums = function(nums) {
    const res = [];
    const length = nums.length;
    const count_map = new Map();

    let repeat_num = undefined
    let error_num = undefined

    for (const num of nums) {
        count_map.set(num,(count_map.get(num)||0)+1);
    }

    for (let i =1;i<=length;i++) {
        let count = count_map.get(i) || 0;
        if (count == 2) {
            repeat_num = i;
        }
        if (count == 0) {
            error_num = i;
        }
    }

    res.push(repeat_num);
    res.push(error_num)

    return res;
}

console.log(findErrorNums([3,2,3,4,6,5]))
console.log([ 3, 1 ].length)
console.log([ 3, 1 ][0])
console.log([ 3, 1 ][1])