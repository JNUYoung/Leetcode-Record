/**
 * leetcode 剑指offer05-替换空格
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

const replaceSpace = function(s) {
    return s.split(' ').join('%20')
}

console.log(replaceSpace('hello world'))