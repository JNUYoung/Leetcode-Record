/**
 * leetcode1047.删除字符串中的所有相邻重复项
 */

const removeDuplicates = function(s) {
    const stack = []
    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop()
            continue
        } 
        stack.push(char)
    }

    return stack.join('')
}

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates("azxxzy"))