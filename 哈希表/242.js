/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-28 16:02:07
 * @LastEditTime: 2022-08-28 16:22:30
 * @FilePath: \young_leetcode\哈希表\242.js
 */

const isAnagram = function(s, t) {
    let s_map = new Map(), t_map = new Map();

    if (s.length !== t.length) return false;

    for (const ch of s) {
        s_map.set(ch, s_map.has(ch)?s_map.get(ch)+1 : 1);
    }
    for (const ch of t) {
        t_map.set(ch, t_map.has(ch)?t_map.get(ch)+1 : 1);
    }

    for (let [key, value] of s_map.entries()) {
        if (t_map.has(key) && t_map.get(key)===value) continue
        else {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"))