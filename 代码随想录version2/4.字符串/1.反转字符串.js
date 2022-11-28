/**
 * leetcode 344.反转字符串
 */

const reverseString = function(s) {
    let strArr = s.split('')
    const n = strArr.length
    
    let left = 0, right = n - 1
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++
        right--
    }
    return strArr
}

console.log(reverseString('abcdedg'))