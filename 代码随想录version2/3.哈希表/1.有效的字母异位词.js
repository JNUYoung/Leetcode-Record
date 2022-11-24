/**
 * leetcode 242.有效的字母异位词
 *      若两个字符串中每个字符出现的次数都相同，则称这两个字符串互为字母异位词
 */

const isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const m = new Map()
    for (const char of s) {
        m.set(char, m.has(char) ? m.get(char) + 1 : 1)
    }
    for (const char of t) {
        m.set(char, m.has(char) ? m.get(char) - 1 : 1)
    }
    for (const value of m.values()) {
        if (value) {
            return false
        }
    }
    return true
}

let str1 = "anagram"
let str2 = "anagram"
console.log(isAnagram(str1, str2))

let str3 = "rat"
let str4 = "car"
console.log(isAnagram(str3, str4))

console.log("a".charCodeAt())