/**
 * 原生方法：Array.prototype.flat()
 * 
 * 思路：遍历数组，找出其中类型为数组的元素，将其进行展开，递归调用直到全部展开
 * 
 * 1.数组遍历：
 *      for...of \ for in \ forEach \ map \ reduce \ entries \ keys \ values
 * 
 * 2.数组类型判断：
 *      instanceof \ isArray \ Object.prototype.toString.apply
 * 
 * 3.数组展开：
 *      spread syntax
 */

const flatten = function(arr) {
    const ans = [];
    const recursive = function(arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                recursive(item);
            } else {
                ans.push(item)
            }
        }
    }
    recursive(arr);
    return ans;
}

const arr1 = [1,[2,3],[4,[5,[6]],7]];
console.log(flatten(arr1));

// improved version
const myFlat = function(arr) {
    const ans = [];
    const rec = (arr) => arr.forEach((item) => {
        if (Array.isArray(item)) {
            rec(item);
        } else {
            ans.push(item);
        }
    })
    rec(arr);
    return ans;
}
console.log(myFlat(arr1));


// 使用depth参数控制flatten的深度
const myFlat1 = function(arr = [], depth = 1) {
    const ans = [];
    (function flat(arr, depth) {
        arr.forEach((item) => {
            if (Array.isArray(item) && depth > 0) {
                flat(item, depth - 1);
            } else {
                ans.push(item);
            }
        })
    })(arr, depth)
    return ans;
}


// 使用reduce方法，传入depth一个较大的数值，模拟infinity参数
const _myFlat = (arr, depth = 1) => {
    if (depth <= 0) return arr;
    return arr.reduce((res, cur) => res.concat(Array.isArray(cur) ? _myFlat(cur, depth - 1) : cur), [])
}
console.log(_myFlat(arr1, 100));