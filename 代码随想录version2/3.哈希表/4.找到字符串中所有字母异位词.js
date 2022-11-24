/**
 * leetcode 438.找到字符串中所有字母异位词
 * 
 */

const findAnagrams = function(s, p) {
    const res = []
    const arr = new Array(26).fill(0)

    for (const char of p) {
        arr[char.charCodeAt()-'a'.charCodeAt()]++
    }

    let i = 0, j = 0, cur = new Array(26).fill(0)
    s = s.split('')
    for (i; i < p.length; i++) {
        cur[s[i].charCodeAt()-"a".charCodeAt()]++
    }
    j = i - 1
    i = 0
    if (cur.toString() === arr.toString()) {
        res.push(i)
    }
    // i = 0, j = p.length - 1
    while (j < s.length - 1) {
        cur[s[++j].charCodeAt()-"a".charCodeAt()]++
        cur[s[i++].charCodeAt()-"a".charCodeAt()]--
        if (cur.toString() === arr.toString()) {
            res.push(i)
        }
    }
    return res
}

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))