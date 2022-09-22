/**
 * 118.杨辉三角
 * 难度：简单
 * 题目描述：给定一个非负整数，numRows，生成杨辉三角的前numRows行
 * 杨辉三角中，每个数是它左上方和右上方的数的和
 */


// 直观的想法：
// 循环[1, numRows]，每次循环，生成一个新数组，然后用上一层的数组，从第一个元素开始，遍历到最后一个元素，两两前后相加赋值给当前行


// 每行的数字都是左右对称的
const generate = function(numRows) {
    let res = [];

    for (let row = 0; row < numRows; row++) {
        let curArray = new Array(row + 1).fill(1);
        if (curArray.length > 2) {
            for (let i = 0; i < res[row - 1].length - 1; i++) {
                curArray[i + 1] = res[row - 1][i] + res[row - 1][i + 1];
            }
        }
        res.push(curArray);
    }

    return res;
}

export default generate;

