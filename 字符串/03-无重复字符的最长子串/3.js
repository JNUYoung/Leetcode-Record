/**
 * param：字符串s
 * return：字符串s中的最长的无重复元素的子串的长度
 * 
 * ES6的set数据结构——集合
 * let s = new Set();
 * 
 * 操作方法
 * s.add();
 * s.delete();
 * s.has();
 * s.clear();
 * 
 * 遍历方法
 * s.keys();
 * s.values();  // keys()和values()操作一致，因为set只有键值
 * s.entries(); // entries会返回重复的key和value。例如set = ['a', 'b']，则set.entries()返回[a: a, b: b]
 * s.forEach(); // 与数组的forEach方法类似
 * 
 * -------- -------- -------- --------
 * 使用扩展运算符和set结合，实现集合的 并集、交集、差集；
 * ！扩展运算符的原理！
 */

function lengthOfLongestSubstring(s) {
    const set = new Set();
    const n = s.length;
    let returnMaxLength = 0;
    let resIndex = [0, 0];

    let right = 0;
    for (let left = 0; left < n; left++) {
        if (left !== 0) set.delete(s[left - 1]);
        while (right < n && !set.has(s[right])) {
            set.add(s[right]);
            right++;
        }
        // 每一次指针移动完后，更新当前最小长度
        // 因为上面跳出循环时，right还加了1，因此right-left就是子串的长度
        // returnMaxLength = Math.max(returnMaxLength, right - left);

        if (right-left > returnMaxLength) {
            returnMaxLength = right - left;
            resIndex[0] = left;
            resIndex[1] = right;
        }
    }

    let returnMinSubstring = s.slice(resIndex[0], resIndex[0] + returnMaxLength);

    return [returnMinSubstring, returnMaxLength];
}


// const {str, length} = lengthOfLongestSubstring('abcabcbb');
// console.log(`string: ${str}, length: ${length}`);


const [str, length] = lengthOfLongestSubstring("bbbbb");
console.log(`string: ${str}, length: ${length}`);


// export default lengthOfLongestSubstring;