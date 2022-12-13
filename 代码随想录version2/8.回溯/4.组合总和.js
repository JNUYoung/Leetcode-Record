/**
 * leetcode39.组合总和
 * 
 * 给定一个无重复元素的整数数组candidates和一个目标整数target，找出
 * candidates中可以使数字和为target的所有不同组合
 */

/**
 * 本题没有组合数量的要求，也就是没有要求选择的元素的数量，仅仅只是总和的要求，所以
 * 递归没有层数限制，只要递归搜索的结果大于等于target了就进行回溯。
 */

const combinationSum = function(candidates, target) {
    // 计算数组的和
    function arrSum(arr) {
        return arr.reduce((prev, cur) => prev + cur, 0)
    }

    const result = []    // 存放结果组合的数组
    const path = []    // 存放当前的搜索结果
    
    // 通过startIndex参数来防止重复的集合（控制for循环的起始位置）
    const backtracking = function(candidates, target, startIndex) {
        // 终止条件
        if (arrSum(path) >= target) {
            if (arrSum(path) === target) {
                result.push([...path])
            }
            return
        }
        // 使用一个集合来求组合，就需要startIndex
        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i])
            backtracking(candidates, target, i)
            path.pop()
        }
    }
    
    backtracking(candidates, target, 0)
    return result
}

console.log(combinationSum([2, 3, 6, 7], 7))