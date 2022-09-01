/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-31 09:33:12
 * @LastEditTime: 2022-08-31 10:26:23
 * @FilePath: \young_leetcode\哈希表\350.两个数组的交集Ⅱ\350.js
 */

const intersection = function(nums1, nums2) {
    const map1 = new Map(), map2 = new Map();
    let res = [];

    for (const num of nums1) {
        map1.set(num, map1.has(num)? map1.get(num)+1 : 1);
    }

    for (const num of nums2) {
        map2.set(num, map2.has(num)? map2.get(num)+1 : 1);
    }

    for (const [key, value] of map1.entries()) {
        if (map2.has(key)) {
            let count = Math.min(value, map2.get(key));
            for (let i = 0; i < count; i++) {
                res.push(key);
            }
        }
    }

    return res;
}

// console.log(Math.min(2,1));
console.log(intersection([1,2,2,1],[2,2]))


const a = new Map();
a.set(1,'abc');
console.log(a);



// trick
// 1.遍历较短的数组建立hash表，减少hash表所需的内存空间
// 2.利用该hash表，遍历长数组，如果出现在hash表中，且hash_map[element]-1 > 0，则加入结果中【小于0，则说明长数组中该元素多，而要求取最小值，因此判断是否大于0】

const intersection1 = function(nums1, nums2) {
    // 默认nums1.length < nums2.length
    if (nums1.length >= nums2.length) {
        return intersection1(nums2, nums1);
    }

    const map = new Map();
    let res = [];

    for (const num of nums1) {
        map.set(num, map.has(num)? map.get(num)+1 : 1);
    }

    for (const num of nums2) {
        if (map.has(num) && map.get(num)-1 > 0) {
            res.push(num);
            map.set(num, map.get(num)-1);
        }
    }

    return res;
}


console.log(Array.from(String(123)).forEach(x=>parseInt(x)));
