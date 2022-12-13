/**
 * leetcode 216.组合总和
 * 
 * 给定n和k，从1-9中找出k个数，这k个数的和等于n，返回不重复的组合
 */


const combinationSum3 = function(k, n) {
    // 数组求和函数
    function arrSum(arr) {
        return arr.reduce((prev, cur) => prev + cur, 0)
    }

    // 存放结果的集合
    const result = []
    // 存放当前遍历的结果
    const path = []
    const backtracking = function(range=9, k, n, startIndex) {
        // // 终止条件1：找出了k个数且k个数的和为n——满足条件，将当前搜索结果加入result
        // if (arrSum(path) === n && path.length === k) {
        //     result.push([...path])
        //     return
        // }
        // // 终止条件2：不满足条件1的情况下，但是此时搜索到了终点，也即path中已有k个数
        // if (path.length === k) {
        //     return
        // }
        
        // 当搜索了k个数时
        if (path.length === k) {
            // 只有这k个数的和等于n，才加入result
            if (arrSum(path) === n) {
                result.push([...path])
            }
            return
        }
        // 在树的每一层进行搜索
        for (let i = startIndex; i <= range; i++) {
            path.push(i)
            backtracking(9, k, n, i + 1)
            path.pop()
        }
    }
    backtracking(9, k, n, 1)
    return result
}

console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))