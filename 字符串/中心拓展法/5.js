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


//? improved version
var longestPalindrome = function(s) {
    let res = "";
    let maxLength = 0;

    for (let i = 1; i < s.length - 1; i++) {
        let left = i - 1;
        let right = i + 1;
        while (s[left] === s[right]) {
            left--;
            right++;
        }
        if ((right - left - 1) >= maxLength) {
            maxLength = right - left - 1;
            res = s.substr(left + 1, maxLength);
        }
    }

    return res;
}

console.log(longestPalindrome("cbbd"));
