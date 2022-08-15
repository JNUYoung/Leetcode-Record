/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-15 16:29:15
 * @LastEditTime: 2022-08-15 16:51:05
 * @FilePath: \young_leetcode\数组\2.统计数组的元素\697.js
 */


// const findShortestSubArray = function(nums) {
//     let nums_map = new Map();
//     const length = nums.length;
//     let degree = 0,min_length = 0;

//     for (let i=0;i<length;i++) {
//         // 如果不包含该key
//         if (!(nums[i] in Object.keys(nums_map))) {
//             nums_map.set(nums[i],[1,i,i]);
//         } else {
//             nums_map[nums[i]][0] += 1;
//             nums_map[nums[i]][-1] = i;
//         }
//     }

//     for (const [count,start,end] of Object.values(nums_map)) {
//         if (count>degree) {
//             degree = count;
//             min_length = end - start + 1;
//         } else if (count = degree) {
//             min_length = (end-start+1)<min_length?end-start+1:min_length;
//         } else {
//             continue
//         }
//     }

//     return min_length;
// }




var findShortestSubArray = function(nums) {
    const mp = {};

    for (const [i, num] of nums.entries()) {
        if (num in mp) {
            mp[num][0]++;
            mp[num][2] = i;
        } else {
            mp[num] = [1, i, i];
        }
    }
    
    let maxNum = 0, minLen = 0;
    for (const [count, left, right] of Object.values(mp)) {
        if (maxNum < count) {
            maxNum = count;
            minLen = right - left + 1;
        } else if (maxNum === count) {
            if (minLen > (right - left + 1)) {
                minLen = right - left + 1;
            }
        }
    }
    return minLen;
};



console.log(findShortestSubArray([1,2,2,3,1]))
console.log(findShortestSubArray([1,2,2,3,1,4,2]))
console.log(findShortestSubArray([1,2,2,1,2,1,1,1,1,2,2,2]))