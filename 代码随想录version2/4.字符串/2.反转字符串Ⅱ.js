/**
 * leetcode 541
 * 
 * 给定一个字符串s和一个整数k，每计数至2k个字符，就反转这2k个字符中的前k个
 */

/**
 *  s = "abcdefg", k = 2
 * 
 * 思路：
 *      在遍历字符串的过程中，让i每次+=2k就可以了，然后判断是否存在需要反转的区间，也就是右边界是否超过了字符串的最大长度
 *          若i+2k超过了字符串最大长度，判断i+k是否超过字符串最大长度
 *              1.若没超过，则将剩余的全部反转
 *              2.若超过了，则将前k个进行反转
 * 
 *      所以每次要找的也就是长度为2k的区间的起点，然后判断其终点是否越界
 */

const reverseStr = function(s, k) {
    let strArr = s.split('')
    const n = s.length
    for (let i = 0; i < n; i += 2*k) {
        // 如果存在前k个字符，则将它们反转
        if (i + k < n) {
            let left = i, right = left + k - 1
            while (left++ < right--) {
                [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
            }
        } else {
            let left = i, right = n - 1
            while (left++ < right--) {
                [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
            }
        }
    }
    return strArr.join('')
}

console.log(reverseStr("abcdefg", 2))