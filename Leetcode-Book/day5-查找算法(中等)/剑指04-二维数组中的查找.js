// brute-force
var findNumberIn2DArray = function(matrix, target) {
    for (let row of matrix) {
        for (let item of row) {
            if (item === target) return true;
        }
    }

    return false;
}


// O(M + N)
// 从矩阵的左下角元素开始
var findNumberIn2DArray = function(matrix, target) {
    // 获取matrix的行数
    let rowNum = matrix.length;
    // 获取matrix的列数
    let colNum = matrix[0] ? matrix[0].length : 0;
    // 获取左下角元素的索引
    let i = rowNum - 1;
    let j = 0;

    while (i >=0 && j < colNum) {
        let temp = matrix[i][j];
        if (temp > target) {
            i--
        } else if (temp < target) {
            j++
        } else {
            return true;
        }
    }

    return false;
}
/**
 * 可以理解为：
 * 矩阵左下角的元素，是该行的最小值、是该列的最大值；
 * 因此，若目标值大于该元素，则大于该列所有元素，因此就直接舍弃该列
 * 若目标值小于该元素，则小于该行所有元素，因此，直接舍弃该行
 */