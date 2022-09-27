
// var convert = function(s, numRows) {
//     let numCols = s.length % (2 * numRows - 2) ? (s.length / (2 * numRows - 2)) * 2 + 1:(s.length / (2 * numRows - 2)) * 2;
//     let newArr = new Array(numRows).fill(0).map((item)=>new Array(numCols));
//     let count = 0;
//     // 遍历s中的每个字符
//     for (let char of s) {
//         for (let i = 0; i < numRows; i++) {
//             for (let j = 0; j < numCols; j++) {
//                 char[i][j] = char;
                
//             }
//         }
//     }
// };


/**
 * 
 */

var convert = function(s, numRows) {
    if (numRows < 2) return s;
    let resArr = new Array(numRows).fill(0).map((item)=>"");
    // console.log(resArr);
    // resArr.forEach((item)=>Array.from(item));
    // console.log(typeof resArr[0]);
    let flag = -1;
    let i = 0;

    for (let char of s) {
        resArr[i] += char;
        if (i === 0 || i === numRows - 1) flag = -flag;
        i += flag;
    }

    return resArr.join("");
}

console.log(convert("PAYPALISHIRING", 3));

/**
 * 可以理解为，有numRows个字符串
 * 
 * 元素不断地添加进 1, 2, ... , numRows, numRow-1, ... , 1, 2, ...；
 * 也即从1到numRows，再从numRows到1，不断地将字符添加到对应的字符串中
 * 
 * 因此，用一个flag来标识何时应该反转方向——到达边界时，也就是第一个字符串或第numRows个字符串添加完元素后
 */
