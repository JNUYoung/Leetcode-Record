/**
 * 最大交换  medium
 * 
 * 只允许交换一次
 */


// 暴力方法，题目给定的数字范围为0-10e8，因此至多有7+6+5+4+3+2+1 = 28种交换可能，依次遍历枚举即可
var maximumSwap = function(num) {
    let num_arr = String(num).split("");
    let curMax = num;

    for (let i = 0; i < num_arr.length - 1; i++) {
        for (let j = i + 1; j < num_arr.length; j++) {
            [num_arr[i], num_arr[j]] = [num_arr[j], num_arr[i]];
            let tempValue = Number(num_arr.join(""));
            curMax = tempValue > curMax? tempValue : curMax;
            [num_arr[i], num_arr[j]] = [num_arr[j], num_arr[i]];
        }
    }

    return curMax;
}


// greedy algorithm
// swap（右边最大的且最靠右的，左边最小的且最靠左的）

var maximumSwap = function(num) {
    const charArray = [..."" + num];
    const n = num.length;
    let maxId = n - 1;
    let index1 = -100;
    let index2 = -100;

    for (let i = n - 1; i >= 0; i--) {
        if (charArray[i] > charArray[maxId]) {
            maxId = i;
        } else if (charArray[i] < charArray[maxId]) {
            index1 = i;
            index2 = maxId;
        } else {
            continue;
        }
    }

    if (index1 >= 0) {
        [charArray[index1], charArray[index2]] = [charArray[index2], charArray[index1]];
        return parseInt(charArray.join(""));
    } else {
        return num;
    }
}

console.log(maximumSwap(1993));