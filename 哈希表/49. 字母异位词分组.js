/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-29 11:36:18
 * @LastEditTime: 2022-08-29 19:51:45
 * @FilePath: \young_leetcode\哈希表\49. 字母异位词分组.js
 */

var groupAnagrams = function(strs) {
    // strs_map = new Map();

    // for (const item of strs) {
    //     let item_map = new Map();
    //     for (const ch of item) {
    //         item_map.set(ch, item_map.has(ch)? item_map.get(ch)+1:1);
    //     }
    //     if (strs_map.has(item_map)) {
    //         strs_map.get(item_map).push(item);
    //     } else {
    //         strs_map.set(item_map, [item]);
    //     }
    // }

    // let res = [];
    // for (const [key, value] of strs_map.entries()) {
    //     res.push(value);
    // }

    // return res;

    let strs_map = new Map();

    for (const item of strs) {
        let count_arr = new Array(26).fill(0);
        const start = 'a'.charCodeAt();
        for (const ch of item) {
            count_arr[ch.charCodeAt() - start]++;
        }
        count_arr = count_arr.toString();
        if (strs_map.has(count_arr)) {
            strs_map.get(count_arr).push(item);
        } else {
            strs_map.set(count_arr, [item]);
        }
    }

    let res = [];
    for (let [key, value] of strs_map.entries()) {
        res.push(value);
    }

    return res;
};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))

// 仍然使用hashmap进行分组，每个key为该组异位词的标识，value为异位词组成的数组
// ES6的Map的key可以是任意的值
// 对于一组异位词，找到一个唯一的key来进行标识



// 使用排序后的字符串作为索引，互为异位词的字符串，在排序后必然是相同的字符串
var groupAnagrams_through_sorted_string = function(strs) {
    let strs_map = new Map();

    for (const item of strs) {
        let current_item = Array.from(item).sort().toString();
        
        strs_map.set(current_item, strs_map.has(current_item)? strs_map.get(current_item).push(item):[item]);
    }

    // let res = [];
    // for (let [key, value] of strs_map.entries()) {
    //     res.push(value);
    // }

    return Array.from(strs_map.values());
};
console.log(groupAnagrams_through_sorted_string(["bdddddddddd","bbbbbbbbbbc"]));




const groupAnagrams_through_count = function(strs) {
    const map = new Object();

    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count]? map[count].push(s) : map[count] = [s];
    }
    return Object.values(map);
}
console.log(groupAnagrams_through_count(["bdddddddddd","bbbbbbbbbbc"]));