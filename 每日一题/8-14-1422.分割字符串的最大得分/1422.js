/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-14 14:42:26
 * @LastEditTime: 2022-08-14 14:49:31
 * @FilePath: \young_leetcode\每日一题\8-14-1422.分割字符串的最大得分\1422.js
 */

const maxScore = function(s) {
    let res = 0;
    let score = 0;

    // 按i=1进行划分时的结果，作为初始的score
    if (s[0] === '0') {
        score += 1;
    }

    for (let i = 1;i < s.length; i++) {
        if (s[i] === '1') {
            score += 1;
        }
    }

    res = score;
    
    for (let i = 1;i<s.length-1;i++) {
        if (s[i] === '0') {
            score += 1;
        } else {
            score -= 1;
        }

        res = score > res ? score:res;
    }

    return res;
}

console.log(maxScore('011101'))
console.log(maxScore('00111'))
console.log(maxScore('1111'))
console.log(maxScore('00'))