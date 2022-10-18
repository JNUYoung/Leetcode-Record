/**
 * 189.轮转数组
 * 
 * 给定一个数组，将数组中的元素向右轮转k个位置，其中k是非负数
 */

// 方法一：数组反转
const reverseArray = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k %= nums.length;
    // 如果轮转长度为0 或者 轮转长度等于数组长度的倍数，则无需修改数组
    if (k === 0) return;
    // 否则，需要将数组的元素向右轮转steps长度
    nums.reverse();
    // 再对[0, k - 1], [k, length - 1] 分别翻转
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, length - 1);
};




let arr = [1,2,3,4,5,6,7];
reverseArray(arr, 0, 3);
console.log(arr);


// 方法二：使用额外的数组
// 遍历原数组，将原数组下标为i的元素放至新数组下标为（i+k）% nums.length的位置
// 最后将新数组拷贝至原数组
var rotate = function(nums, k) {
    const ans = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        ans[(i+k)%nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i];
    }
}



let colors = ['red', 'green', 'blue'];
let newColors = ['white', 'pink'];
console.log(colors.concat(newColors));
newColors[Symbol.isConcatSpreadable] = false;
console.log(colors.concat(newColors));

let a = [1, 2, 3];
let b = [[4, 5, [6, 7, 8]],[9, 10]];
console.log(a.concat(b));


console.log(Math.max(...a));