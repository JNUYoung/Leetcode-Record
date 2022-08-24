/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-24 11:13:53
 * @LastEditTime: 2022-08-24 11:21:20
 * @FilePath: \young_leetcode\每日一题\8-24-1460.通过翻转子数组使两个数组相等\1460.js
 */

const canBeEqual = function(target, arr) {
    let target_map = new Map(), arr_map = new Map();
    
    for (const item in target) {
        target_map.set(item, (target_map.get(item) || 0) + 1);
    }

    for (const item in arr) {
        arr_map.set(item, (arr_map.get(item) || 0) + 1);
    }

    if (target_map.size !== arr_map.size) {
        return false;
    }

    for (const item in target_map.entries()) {
        if ((!arr_map.get(item[0])) || arr_map.get(item[0]) !== item[1]) {
            return false;
        }
    }

    return true;
}

console.log(canBeEqual(target = [1,2,3,4], arr = [2,4,1,3]))
console.log(canBeEqual(target = [1,2,3,4], arr = [2,4,1,3,5]))

