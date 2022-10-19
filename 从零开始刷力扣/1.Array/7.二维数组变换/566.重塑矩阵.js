/**
 * 566.重塑矩阵
 * 
 * 实现reshape功能函数，将一个m*n的矩阵重塑为另一个r*c的矩阵
 *  -按照行遍历的顺序进行重塑
 *  -若形状不符合要求，输出原始矩阵
 */

 var matrixReshape = function(mat, r, c) {
    // 获取mat的行和列
    const rows = mat.length, cols = mat[0].length;
    if (rows * cols !== r * c) return mat;
    // 定义返回的新数组
    const newMatrix = new Array(r).fill(0).map(()=>new Array(c).fill(0))
    mat = mat.flat();
    for (let i = 0; i < r * c; i++) {
        newMatrix[Math.floor(i / c)][i % c] = mat[i];
    }
    return newMatrix;
};


console.log(matrixReshape([[1,2],[3,4]], 4, 1));