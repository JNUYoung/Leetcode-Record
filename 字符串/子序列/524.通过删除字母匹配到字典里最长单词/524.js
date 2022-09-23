/**
 * 524.通过删除字母匹配到字典里最长单词
 * 难度：中等
 * 描述：给定一个字符串s和一个字符串数组dictionary，找出并返回dictionary中
 * 最长的字符串，该字符串可以通过删除s中的某些字符得到
 */

/**
 * 暴力解法
 * 
 * res = []
 * curMaxLength = 0
 * 
 * 1.遍历判断数组中每个元素是否能匹配；
 *     若能匹配，记录当前的最长长度是否更新：
 *         若更新，则将res清空，再添加元素
 *         若不更新，则直接添加元素
 * 2.对res数组进行排序，按照字符串的unicode编码升序排序
 *     返回排序后的res数组的第一项
 */


 var findLongestWord = function(s, dictionary) {
    let res = [];
    let curMaxLength = 0;

    var isSubsequence = function(s, t) {
        let s_pointer = 0;

        while (s_pointer < s.length) {
            for (let i = 0; i < t.length; i++) {
                if (t[i] === s[s_pointer]) {
                    s_pointer += 1;
                }
            }
            break;
        }

        return s_pointer >= s.length;
    }

    for (let item of dictionary) {
        // 当前元素能匹配
        if (isSubsequence(item, s)) {
            if (item.length > curMaxLength) {
                res = [];
                res.push(item);
                curMaxLength = item.length;
            } else if (item.length === curMaxLength) {
                res.push(item);
            } else {
                continue;
            }
        }
    }

    res.sort();
    console.log(res);

    return res.length === 0 ? "" : res[0];
};


console.log(findLongestWord("abce", ["abe","abc"]));


// imporved version
var findLongestWord = function(s, dictionary) {
    let res = "";
    for (const item of dictionary) {
        let i = 0;
        let j = 0;
        while (i < item.length && j < s.length) {
            if (item[i] === s[j]) {
                i += 1;
            }
            j += 1;
        }
        // 匹配
        if (i === item.length) {
            if (item.length > res.length || (item.length === res.length && item < res)) {
                res = item;
            }
        }
    }

    return res;
}


// improved version 2.0
// string.localeCompare(target_string)
// 该方法通常配合字符串排序时使用，若大于target_string，则返回正数，若小于，则返回负数，若等于，则返回零
var findLongestWord = function(s, dictionary) {
    dictionary.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    })

    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                i++;
            }
            j++;
        }

        if (i === t.length) {
            return t;
        }
    }

    return "";
}