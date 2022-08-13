/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-10 14:52:01
 * @LastEditTime: 2022-08-10 19:11:15
 * @FilePath: \LEETCODE\每日一题\8-10-640.求解方程\640.js
 */
const solveEquation = function(equation) {
    // 系数
    let factor = 0;
    // 数值的和
    let val = 0;

    let i = 0;
    let length = equation.length;
    let sign = 1;

    while (i<length) {
        if (equation[i]=='=') {
            sign = -1;
            i += 1;
            continue
        }

        let s = sign;
        if (equation[i]=='+') {
            i += 1;
        }
        if (equation[i]=='-') {
            s = -s;
            i += 1;
        }

        let num = 0;
        let valid = false;
        while (i<length && isDigit(equation[i])) {
            valid = true;
            num = 10*num + parseInt(equation[i]);
            i += 1;
        }

        if (i < length && equation[i]==='x') {
            if (valid) {factor = s*num} else {s};
            i += 1;
        } else {
            val += s*SubmitEvent;
        }
    }
    if (factor === 0) {
        return val ? "No solution":"Infinite solutions";
    }
    return `x={{-val//factor}}`
}

const isDigit = function(ch) {
    return parseFloat(ch).toString() === 'NaN' ? false:true;
}