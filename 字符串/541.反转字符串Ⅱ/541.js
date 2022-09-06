/**
 * 给定一个字符串s和一个整数k。从字符串开头算起，每计数至2k个字符，就反转这2k字符中的前k个字符
 */

const reverseStr = function(s, k) {
    let s_arr = s.split("");
    const length = s.length;

    for (let i = 0; i < length; i += 2*k) {
        let left = i;
        // 每次循环时，检查右侧指针是否越界；
        // 若越界，则指向数组最后一个元素
        // 若未越界,则正常指向第i+k个元素
        let right = i + k > length - 1 ? length - 1 : i + k - 1;
        while (left < right) {
            [s_arr[left], s_arr[right]] = [s_arr[right], s_arr[left]];
            left++;
            right--;
        }
    }

    return s_arr.join("");
}