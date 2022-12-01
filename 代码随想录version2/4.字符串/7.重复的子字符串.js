/**
 * leetcode459.重复的子字符串
 */

const repeatedSubstringPattern = function(s) {
    const newStr = s + s
    let i = 1, j = newStr.length - 2
    while (i < j) {
        if (newStr.slice(i, j + 1).includes(s)) {
            return true
        } else {
            i++
            j--
        }
    }
    return false
}

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern("abcabcabcabc"))