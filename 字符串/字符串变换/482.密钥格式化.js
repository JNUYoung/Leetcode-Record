/**
 * 482.密钥格式化
 * 难度：简单
 * 
 * 1.从后向前遍历字符串，若当前字符为破折号则跳过，否则将当前字符大写后加入res数组中
 * 2.每当加入了四个字符后，加入一个破折号；
 * 3.遍历完后，若数组最后一个元素为破折号，则删除该破折号（表明刚好是k的倍数）
 * 4.将res数组反转，并且拼接为字符串返回
 */


var licenseKeyFormatting = function(s, k) {
    let res = [];
    let count = 0;

    // 从最后一个字符开始，向前遍历
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "-") continue;
        // 如果当前遍历字符不是破折号，则将当前字符变为大写后，加入res数组中
        res.push(s[i].toUpperCase());
        count += 1;
        // 每当res数组中加入了k个字符后，添加一个破折号
        if (count % k === 0) {
            res.push("-");
        }
    }

    // 若s的长度刚好能被k整除，此时res数组的最后一个元素为破折号，将其移除
    if (res.length > 0 && res[res.length - 1] === "-") res.pop();

    // 将res数组反转，并拼接为字符串
    return res.reverse().join("");
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));