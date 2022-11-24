/**
 * 383.赎金信
 *      两个字符串，判断其中一个能否由另一个里面的字符构成
 *      如果可以则返回true，如果不可以则返回false
 */

const canConstruct = function(ransomNote, magazine) {
    const m = new Map()
    for (const char of magazine) {
        m.set(char, m.has(char)?m.get(char)+1:1)
    }
    for (const char of ransomNote) {
        if (!m.has(char)) {
            return false
        }
        if (m.get(char)===0) {
            return false
        } else {
            m.set(char, m.get(char)-1)
        }
    }
    return true
}

let str1 = "a"
let str2 = "b"
console.log(canConstruct(str1, str2))

let str3 = "aa"
let str4= "ab"
console.log(canConstruct(str3, str4))