/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-22 15:37:54
 * @LastEditTime: 2022-08-22 16:01:57
 * @FilePath: \young_leetcode\数组\7.螺旋矩阵\59.螺旋矩阵.js
 */

const generateMatrix = function(n) {
    let matrix = new Array(n).fill(new Array(n).fill(0));

    // return matrix;
    let x_index = 0, y_index = 0;
    const loop = parseInt(n / 2);
    const mid = parseInt(n / 2);
    let count = 1;

    for (let offset = 1; offset <= loop; offset++) {
        for (let i = y_index; i < n-offset; i++) {
            matrix[x_index][i] = count;
            count += 1;
        }
        for (let i = x_index; i < n-offset; i++) {
            matrix[i][n - offset] = count;
            count += 1;
        }
        for (let i = n-offset; i > y_index; i--) {
            matrix[n - offset][i] = count;
            count += 1;
        }
        for (let i = n-offset; i > x_index; i--) {
            matrix[i][y_index] = count;
            count += 1;
        }

        x_index++;
        y_index++;
    }

    if (n%2 === 0) {
        matrix[mid][mid] = count;
    }

    return matrix;
}

console.log(generateMatrix(3));