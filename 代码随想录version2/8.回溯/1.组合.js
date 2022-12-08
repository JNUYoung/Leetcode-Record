/**
 * leetcode77.组合：给定两个整数n和k，返回1至n中所有可能的k个数的集合
 */

/**
 * 1.回溯法的本质就是穷举，穷举所有可能的结果，再选择出想要的答案
 * 2.回溯法能解决的问题：
 *      组合问题、切割问题、子集问题、排列问题、棋盘问题等
 * 3.回溯法所解决的问题都可以抽象为一个树型结构，集合的大小构成了树的宽度、递归的深度构成了树的深度
 * 4.回溯法的几个关键步骤：
 *      回溯函数的返回值及参数、搜索的终止条件、搜索的遍历过程
 */

const combine = function(n, k) {
    // 存放结果的集合
    const result = []
    // 回溯搜索函数
    const path = []    // 存放回溯搜索全过程中的结果，不停地增加元素，到达递归终止条件后再不断回溯
    const backtracking = function(n, k, startIndex) {
        // 搜索的终点
        if (path.length === k) {
            result.push([...path])    // 要将当前path进行复制后，再加入最终的结果集合中，否则直接push path是复制的是指向数组的指针
            return
        }
        // 在树的每一层进行搜索
        for (let i = startIndex; i <= n; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
    }
    backtracking(n, k, 1)
    return result
}


// js复制简单一维数组的几种方式
let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1.concat()
let arr3 = arr1.slice(0)
let arr4 = [...arr1]
console.log(arr2, arr3, arr4)