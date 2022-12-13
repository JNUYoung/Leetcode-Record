/**
 * leetcode17.电话号码的字母组合
 */

const digit2Letter = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

const letterCombinations = function(digits) {
    // k表示返回的字母组合的长度，从可选的字母中选择k个字母组合
    const k = digits.length
    
    let collection = []
    for (const digit of digits) {
        collection.push(digit2Letter[digit])
    }
    // collection = collection.split('')    // ['abc', 'def]

    const result = []
    const path = []
    
    // 这里的index表示的是当前遍历的是树的第几层
    // 例如'23'的情况下，index=0表示在'abc'中选择一个字母，index=1表示在'def'中选择一个字母
    // 所以index实际控制的也就是第几个数字，然后遍历这个数字对应的字符集
    const backtracking = function(digits, index) {
        // 终止条件
        if (path.length === digits.length) {
            result.push([...path].join(''))
            return
        }
        for (let i = 0; i < collection[index].length; i++) {
            path.push(collection[index][i])
            backtracking(digits, index + 1)
            path.pop()
        }
    }

    backtracking(digits, 0)
    if (result.length === 1 && result[0] === '') return []
    return result
}


console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))