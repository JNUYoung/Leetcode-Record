/**
 * 521.最长特殊序列
 * 难度：简单
 * 描述：给定两个字符串a和b，返回这两个字符串中最长的特殊序列的长度。
 * 如果不存在，则返回-1
 */


/**
 * 1.若a与b相等，则a的所有子串都是b的子串，b的所有子串也都是a的子串，返回-1
 * 2.若a与b长度相等，但存在字符不同，则a串本身或b串本身，属于最长的特殊子序列，此时返回a或者b的长度即可
 * 3.若a与b长度不等，则较长的字符串 一定 不可能是较短的字符串的子串，因此，此时返回较长的字符串的长度即可
 * 
 * conclusion: longer, better 
 */

var findLUSlength = function(a, b) {
    const a_length = a.length;
    const b_length = b.length;

    if (a === b) return -1;
    if (a_length === b_length) {
        return a_length;
    } else {
        return Math.max(a_length, b_length);
    }
}