/**
 * 54.螺旋矩阵
 * 
 * 给定一个矩阵matrix，按照顺时针螺旋顺序，返回矩阵中的所有元素
 */


/**
 * 模拟法
 * 
 * 定义上下左右的边界，按照顺时针遍历矩阵，并在遍历的过程中动态修改对应的边界（例如遍历完一行后，让顶部的边界变为第二行）
 */

const spiralOrder = function(matrix) {
    // 检查矩阵是否合法
    if (!matrix instanceof Array || matrix.length === 0) return [];
    // 矩阵的行数
    const rows = matrix.length;
    // 矩阵的列数
    const cols = matrix[0].length;
    // 矩阵元素数目
    let nums_elements = rows * cols;
    // 返回的遍历结果数组
    const ans = [];

    // 初始化第一次遍历时的上下左右边界
    let left = 0, 
        right = cols - 1,
        top = 0,
        bottom = rows - 1;
    
    // 当矩阵还有元素未被遍历时，继续遍历
    while (nums_elements > 0) {
        // 从左到右遍历
        for (let i = left; i <= right && nums_elements > 0; i++) {
            ans.push(matrix[top][i]);
            nums_elements--;
        }
        // 遍历完一行之后，要让上边界下移1，即top+1
        top++;

        // 从上到下遍历
        for (let i = top; i <= bottom && nums_elements > 0; i++) {
            ans.push(matrix[i][right]);
            nums_elements--;
        }
        // 遍历完右侧的列后，让右边界right左移
        right--;

        // 从右到左遍历
        for (let i = right; i >= left && nums_elements > 0; i--) {
            ans.push(matrix[bottom][i]);
            nums_elements--
        }
        // 下边界上移
        bottom--;

        // 从下到上遍历
        for (let i = bottom; i >= top && nums_elements > 0; i--) {
            ans.push(matrix[i][left]);
            nums_elements--;
        }
        // 左边界右移
        left++;
    }
    return ans;
}