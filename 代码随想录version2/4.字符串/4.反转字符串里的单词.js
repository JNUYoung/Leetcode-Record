/**
 * leetcode 151.反转字符串中的单词
 */

const reverseWords = function(s) {
    return s.trim().split(' ').toReversed().join(' ')
}

console.log(reverseWords("the sky is blue"))