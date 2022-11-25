/**
 * leetcode-739.每日温度
 * 
 * 给定一个整数数组表示每天的温度，返回一个数组answer，其中answer[i]表示对于第i填，下一个更高的温度出现在多少天之后
 * 如果第i天之后气温都不会升高，则返回0
 */

// double for loop
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const res = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        const curTemp = temperatures[i]
        let flag = false
        for (let j = i + 1; j < n; j++) {
            if (temperatures[j] > curTemp) {
                res[i] = j - i
                flag = true
                break
            }
        }
        if (!flag) res[i] = 0
    }
    return res
};