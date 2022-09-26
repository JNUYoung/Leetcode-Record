
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
 * 1.遍历字符串每个字符
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
