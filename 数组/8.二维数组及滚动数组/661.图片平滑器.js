/**
 * 661.图片平滑器
 * 难度：简单
 * 描述：对于一个图像中的每一个单元格，以其为3*3的过滤器的中心，计算这九个元素
 * 的平均值，向下取整作为当前单元格的值
 * 
 * 
 * js 初始二维数组的简便方式
 */


// 在img外面再包裹一层全为0的元素

const imageSmoother = function(img) {
    const m = img[0].length;
    const n = img.length;
    for (let item of img) {
        item.unshift(0);
        item.push(0);
    }
    img.unshift(new Array(m + 2).fill(0));
    img.push(new Array(m + 2).fill(0))
    // console.log(img);
    // 经过填充后，现在的大小为 (m + 2) * (n + 2)
    // 初始化一个新的空数组
    let res = new Array(n).fill(0).map(v => new Array(m).fill(0));
    // console.log(res);

    for (let i = 1; i < 1 + n; i++) {
        for (let j = 1; j < 1 + m; j++) {
            let firstLineSum = img[i - 1][j - 1] + img[i - 1][j] + img[i - 1][j + 1];
            let secondLineSum = img[i][j - 1] + img[i][j] + img[i][j + 1];
            let thirdLineSum = img[i + 1][j - 1] + img[i + 1][j] + img[i + 1][j + 1];
            let curSum = firstLineSum + secondLineSum + thirdLineSum;
            let curValue = 0;
            if ((i == 1 && j == 1) || (i == 1 && j == m) || (i == n && j == 1) || (i ==n && j == m)) {
                curValue = Math.floor(curSum / 4);
            } else {
                if (i == 1 || i == n || j == 1 || j == m) {
                    curValue = Math.floor(curSum / 6);
                } else {
                    curValue = Math.floor(curSum / 9);
                }
            }
            res[i - 1][j - 1] = curValue;
        }
    }

    return res;
}


console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));



// 对于位置（i，j），枚举其周围的九个单元是否存在，对于存在的单元格，统计其数量和总和；
const imageSmoother1 = function(img) {
    const m = img.length;
    const n = img[0].length;
    const res = new Array(m).fill(0).map(()=>new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let num = 0;
            let sum = 0;
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (x >=0 && x < m && y >=0 && y < n) {
                        num++;
                        sum += img[x][y];
                    }
                }
            }
            res[i][j] = Math.floor(sum / num);
        }
    }

    return res;
}

// js 初始二维数组的简便方式
function generateMatrix(row, column) {
    return new Array(row).fill(0).map(() => new Array(column).fill(0));
}

console.log(generateMatrix(5,3));