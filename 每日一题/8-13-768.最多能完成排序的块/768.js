/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-13 16:21:37
 * @LastEditTime: 2022-08-13 16:46:17
 * @FilePath: \LEETCODE\每日一题\8-13-768.最多能完成排序的块\768.js
 */


// var maxChunksToSorted = function(arr) {
//     let res = 0
//     let sortArr = undefined
//     let temp_hash = {}
//     const length = arr.length
    
//     // 得到排序后的数组
//     sortArr = arr.sort((a,b)=>a-b);
//     console.log(sortArr)
//     for (let i=0;i<length;i++) {
//         if (!(arr[i] in temp_hash)) {
//             temp_hash[arr[i]] = 0;
//             temp_hash[arr[i]] += 1;
//         } else {
//             temp_hash[arr[i]] += 1;
//         }

//         if (!(sortArr[i] in temp_hash)) {
//             temp_hash[sortArr[i]] = 0;
//             temp_hash[sortArr[i]] -= 1;
//         } else {
//             temp_hash[sortArr[i]] -= 1;
//         }

//         if ((arr[i] in Object.keys(temp_hash)) && temp_hash[arr[i]]==0) {
//             delete temp_hash[arr[i]];
//         }

//         if ((sortArr[i] in Object.keys(temp_hash)) && temp_hash[sortArr[i]]==0) {
//             delete temp_hash[sortArr[i]];
//         }

//         if (Object.keys(temp_hash).length == 0) {
//             res += 1;
//         }
//     }

//     return res;
// };


var maxChunksToSorted = function(arr) {
    // ES6 的 Map数据结构，hash表
    const cnt = new Map();
    let res = 0;
    // 初始化排序后的数组
    const sortedArr = new Array(arr.length).fill(0);

    sortedArr.splice(0,arr.length,...arr);
    sortedArr.sort((a,b)=>a-b);
    console.log('arr:',arr);

    for (let i = 0;i < arr.length; i++) {
        const x = arr[i];
        const y = sortedArr[i];

        cnt.set(x,(cnt.get(x)||0)+1);
        if (cnt.get(x) === 0) {
            cnt.delete(x);
        }

        cnt.set(y,(cnt.get(y)||0)-1);
        if (cnt.get(y) === 0) {
            cnt.delete(y);
        }

        if (cnt.size === 0) {
            res++;
        }
    }
    return res;
};

console.log(maxChunksToSorted([5,4,3,2,1]))
console.log(maxChunksToSorted([2,1,3,4,4]))