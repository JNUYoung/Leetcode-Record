// 1.【主串的长度】除以【重复子串的长度】需要为一个整数
// 2.【重复子串】一定要是主串的【前缀】，且重复子串的长度必须小于等于主串长度的一半
// 3.在主串中，重复子串呈现周期性出现，周期即为字串的长度，因此遍历主串的过程中，一定有s[j - subString_length] = s[j]



const repeatedSubstringPattern = function(s) { 
    // 获取输入字符串的长度
    const length = s.length;

    // 重复子串的长度从1到length/2，用变量i表示重复子串的长度（枚举）
    for (let i = 1; i <= length / 2; i++) {
        // 只有能够被均分才继续【满足条件1】
        if (length % i === 0) {
            // 对于每一次枚举，定义一个flag来标识是否满足周期性相等
            let flag = true;
            // 变量j遍历主串，若始终满足s[j - i] === s[i]，即i为一个周期，则说明此时的i满足要求，返回true
            for (let j = i; j < length; j++) {
                if (s[j - i] !== s[j]) {
                    // 只要存在不等，那么将flag置为false，同时进行下一次枚举
                    flag = false;
                    break;
                }
            }
            // 每次枚举完成后，通过flag来判断是否满足条件
            if (flag) {
                return true;
            }
        }
    }

    return false;
}