/**
 * 5.最长回文子串
 * 难度：中等
 * 描述：给定一个字符串s，找到s中最长的回文子串
 */


// 暴力方法 O（n^2）
 var longestPalindrome = function(s) {
    let res = "";
    let maxLength = 0;

    var isPalindroom = function(item) {
        const length = item.length;
        let left = 0, right = length - 1;
        while (left < right) {
            if (item[left] === item[right]) {
                left ++;
                right --;
            } else {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let tempSubString = s.substr(i, j - i + 1);
            if (isPalindroom(tempSubString) && tempSubString.length >= maxLength) {
                maxLength = tempSubString.length;
                res = tempSubString;
            }
        }
    }

    return res;
};



var longestPalindrome = function(s) {
    const expandSinceCenter = function(s, left, right) {
        let l = left, r = right;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        // 跳出while循环时，l和r已经指向了最大回文串的左右各一个元素
        return r - l - 1;
    }
    if (s === null || s.length < 1) return "";
    // let 和 start记录当前最长的回文子串的起止位置
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandSinceCenter(s, i, i);    // 以单个节点为中心节点（是否存在长度为奇数的回文串）
        const len2 = expandSinceCenter(s, i, i + 1); // 以相连的两个节点为中心节点（是否存在长度为偶数的回文串）
        if (Math.max(len1, len2) > end - start) {
            // 如果存在更大的子回文串，则更新起止位置
            start = i - (Math.max(len1, len2) - 1) / 2;
            end = i + Math.max(len1, len2) / 2;
        }
    }
    return s.substr(start, end - start);
} 


let res = "abccba";
console.log(res[0] === res[5]);