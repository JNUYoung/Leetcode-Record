/**
 * 392.判断子序列
 * 难度：简单
 * 描述：给定字符串s和t，判断s是否为t的子序列
 * 
 * 字符串的子序列：
 *   原始字符串删除一些字符而不改变剩余字符相对位置形成的新字符串
 */

var isSubsequence = function(s, t) {
    let s_pointer = 0;

    while (s_pointer < s.length) {
        for (let i = 0; i < t.length; i++) {
            if (t[i] === s[s_pointer]) {
                s_pointer += 1;
            }
        }
        break;
    }

    return s_pointer >= s.length;
}

let s = "axc";
let t = "ahbgdc"
console.log(isSubsequence(s, t));