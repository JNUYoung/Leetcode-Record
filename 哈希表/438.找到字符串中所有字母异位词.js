/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-30 09:14:13
 * @LastEditTime: 2022-08-30 10:03:16
 * @FilePath: \young_leetcode\哈希表\438.找到字符串中所有字母异位词.js
 */

// const findAnagrams = function(s, p) {
//     const flag = Array.from(p).sort().toString();
//     let ptr = 0;
//     let res = [];

//     while ((ptr + p.length) <= s.length) {
//         let temp = s.substring(ptr, ptr+p.length);
//         temp = Array.from(temp).sort().toString();
//         if (temp == flag) {
//             res.push(ptr);
//         }
//         ptr++;
//     }

//     return res;
    
// }

const findAnagrams = function(s, p) {
    let res = [];
    // 维护一个长度等于p的长度的滑动窗口
    // 统计该窗口内的各个字符的数目
    if (s.length < p.length) return [];

    const s_count = new Array(26).fill(0);
    const p_count = new Array(26).fill(0);

    // 初始放置窗口时的情况判断
    for (let i = 0; i < p.length; i++) {
        s_count[s[i].charCodeAt() - 'a'.charCodeAt()]++;
        p_count[p[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    if (s_count.toString() === p_count.toString()) {res.push(0)};

    // 开始滑动窗口
    for (let i = 0; i < s.length - p.length; i++) {
        s_count[s[i].charCodeAt() - 'a'.charCodeAt()]--;    // 删除最左端的元素
        s_count[s[i+p.length].charCodeAt() - 'a'.charCodeAt()]++;    // 添加向右滑动一位后新加入的元素

        // pan duan
        if (s_count.toString() === p_count.toString()) {
            res.push(i+1);    // 因为是在i的基础上向右滑动之后的结果，因此实际开始的索引是i+1；
        }
    }

    return res;
}

console.log(findAnagrams("cbaebabacd","abc"));