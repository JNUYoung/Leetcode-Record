/**
 * 77.组合 combine
 * 
 * 给定两个整数n和k，返回范围[1, n]中所有可能的k个数的组合
 * 
 * 可以按任何顺序返回答案
 */

 let result = []
 let path = []
 var combine = function(n, k) {
    result = []
    combineHelper(n, k, 1)
    return result
 };
 const combineHelper = (n, k, startIndex) => {
    if (path.length === k) {
        result.push([...path])
        return
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
        path.push(i)
        combineHelper(n, k, i + 1)
        path.pop()
    }
 }
