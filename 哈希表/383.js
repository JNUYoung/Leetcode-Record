/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-29 10:45:50
 * @LastEditTime: 2022-08-29 10:56:37
 * @FilePath: \young_leetcode\哈希表\383.js
 */
const canConstruct = function(ransomNote, magazine) {
    let ransomNote_map = new Map();
    let magazine_map = new Map();

    for (const ch of ransomNote) {
        ransomNote_map.set(ch, ransomNote_map.has(ch)? ransomNote_map.get(ch)+1 : 1);
    }

    for (const ch of magazine) {
        magazine_map.set(ch, magazine_map.has(ch)? magazine_map.get(ch)+1 : 1);
    }

    for (let [key,value] of ransomNote_map.entries()) {
        if (magazine_map.has(key) && magazine_map.get(key) >= value) {
            continue;
        } else {
            return false;
        }
    }

    return true;
};

console.log(canConstruct('aa', 'aab'))


// 字符统计，利用长度为26的数组
const canConstruct_one = function(ransomNote, magazine) {
    const start = 'a'.charCodeAt();
    let count_arr = new Array(26).fill(0);

    for (const ch of magazine) {
        count_arr[ch.charCodeAt() - start]++;
    }

    for (const ch of ransomNote) {
        count_arr[ch.charCodeAt() - start]--;
        if (count_arr[ch.charCodeAt() - start] < 0) {
            return false;
        }
    }

    return true;
}

console.log('b'.charCodeAt() - 'a'.charCodeAt());
console.log(canConstruct_one('aa', 'aab'))
