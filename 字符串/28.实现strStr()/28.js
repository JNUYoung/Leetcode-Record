// 字符串子串匹配 KMP算法


// 暴力方法
// 时间复杂度：O(m*n)
// 空间复杂度：O(1) 常数空间
var strStr = function(haystack, needle) {
    const h_length = haystack.length, n_length = needle.length;
    let i = 0;

    while (i + n_length <= h_length) {
        let flag = true;
        for (let j = i; j < i + n_length; j++) {
            if (haystack[j] !== needle[j - i]) {
                flag = false;
                break;
            }
        }
        if (flag) return i;
        i++;
    }
    return -1;
}

// KMP算法
// 如何快速在原字符串中找到匹配字符串

// 1.前缀和后缀的概念？

// KMP算法利用已匹配部分中的相同的【前缀】和【后缀】来加速下一次的匹配；
// KMP算法的主串的指针不会进行回溯

// key
// 前缀表【最长相等前后缀】
// 匹配字符串的next数组
