/**
 * leetcode 20.有效的括号
 * 
 * '('，')'，'{'，'}'，'['，']'
 */

const isValid = function(s) {
    s = s.split('')
    const stack = []
    const m = new Map()
    m.set('(', ')')
    m.set('{', '}')
    m.set('[', ']')

    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (m.has(cur)) {
            stack.push(cur)
        } else {
            const temp = stack.length ? stack[stack.length - 1] : null
            if (m.get(temp) !== cur) {
                return false
            } else {
                stack.pop()
            }
        }
    }
    return !stack.length
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("()[]{}}"))