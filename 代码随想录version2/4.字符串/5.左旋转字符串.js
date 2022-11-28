/**
 * leetcode 剑指offer58.左旋转字符串Ⅱ
 * 
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部
 */

const reverseLeftWords = function(s, n) {
    const reverseString = function(s, start, end) {
        return Array.from(s.slice(start, end)).reverse().join("")
    }
    return reverseString(reverseString(s, 0, n) + reverseString(s, n, s.length), 0, s.length)
}

console.log(reverseLeftWords("abcdefg", 2))