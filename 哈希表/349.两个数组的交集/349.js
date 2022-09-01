/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-31 09:16:39
 * @LastEditTime: 2022-08-31 09:20:25
 * @FilePath: \young_leetcode\哈希表\349.两个数组的交集\349.js
 */

const intersection = function(num1, num2) {
    const num_1 = [...new Set(num1)];
    const num_2 = [...new Set(num2)];

    const map1 = new Map();
    const map2 = new Map();

    let res = [];

    for (const item of num_1) {
        map1.set(item, map1.has(item)?map1.get(item)+1:1);
    }

    for (const item of num_2) {
        map2.set(item, map2.has(item)?map2.get(item)+1:1);
    }

    for (const key of map1.keys()) {
        if (map2.has(key)) {
            res.push(key);
        }
    }

    return res;
}


const intersection1 = function(nums1, nums2) {
    const map1 = new Map();
    const res = [];

    for (const num of nums1) {
        map1.set(num, 1);
    }

    for (const num of nums2) {
        if (map1.has(num)) {
            res.push(num);
        }
    }

    return [...new Set(res)];
}

