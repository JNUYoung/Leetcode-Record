// slide window

// const lengthOfLongestSubstring = function(s) {
//     const window = new Set();
//     let max_length = 0;
//     if (s.length === 0) return 0;

//     // 遍历字符串，若window中无当前char，则直接添加进set，若有当前char，则将集合中当前char删除后再加入集合
//     for (const char of s) {
//         if (window.has(char)) {
//             window.delete(char);
//             window.add(char);
//         } else {
//             window.add(char);
//         }
//         max_length = window.size >= max_length ? window.size : max_length;
//     }
//     return max_length;
// }

const lengthOfLongestSubstring = function(s) {
    const window = new Set();
    let max_length = 0;
    if (s.length === 0) return 0;
    let right_ptr = -1;

    for (let left = 0; left < s.length; left++) {
        // 第一个元素为边界情况，从第二个元素开始，该for循环每一次相当于收缩当前滑动窗口的左侧
        if (left !== 0) {
            window.delete(s.charAt(left - 1));    // 将上一个滑动窗口内的最左侧元素去除
        }
        // 每一个滑动窗口内，滑动右侧边界
        // 为什么要用 right_ptr + 1来进行循环呢？因为这样就可以使得，left指向当前最大无重复字符子串的最左侧，而right_ptr指向最右侧，因为right_ptr + 1就刚好为重复了
        while (right_ptr + 1 < s.length && !window.has(s.charAt(right_ptr + 1))) {
            window.add(s.charAt(right_ptr + 1));
            right_ptr++;
        }
        max_length = Math.max(right_ptr - left + 1, max_length);
    }
    return max_length;
}

const s = "pwwkew";
console.log(lengthOfLongestSubstring(s));