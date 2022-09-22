/**
 * 238.除自身以外数组的乘积
 * 难度：中等
 * 描述：给定一个数组，返回一个新数组，为原始数组除对应元素外的其它元素的乘积
 */


// 方法一：暴力方法
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let tempProduct = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            tempProduct *= nums[j];
        }
        res[i] = tempProduct;
    }

    return res;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));


// 方法二：维护数组元素的左乘积列表和右乘积列表
// 时间复杂度 O（n）
// 空间复杂度 O（n）
var productExceptSelf = function(nums) {
    let n = nums.length;
    let leftProductArray = new Array(nums.length).fill(1),
        rightProductArray = new Array(nums.length).fill(1),
        resArray = new Array(nums.length).fill(0);
    
    // 填充左数组
    leftProductArray[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProductArray[i] = leftProductArray[i - 1] * nums[i - 1];
    }
    // 填充右数组
    rightProductArray[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProductArray[i] = rightProductArray[i + 1] * nums[i + 1];
    }

    // 得到返回的res数组
    for (let i = 0; i < n; i++) {
        resArray[i] = leftProductArray[i] * rightProductArray[i];
    }

    return resArray;
}
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));



// 方法三：不用显式声明左乘积数组和右乘积数组

// 1.先用res数组存放左数组；
// 2.再从后向前遍历数组，动态构造右数组并更新res数组；
// 3.返回res数组即可

// 时间复杂度 O（n）
// 空间复杂度 O（1）
var productExceptSelf = function(nums) {
    const length = nums.length;
    let res = new Array(length).fill(1);

    res[0] = 1;
    for (let i = 1; i < length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        res[i] = res[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return res;
}
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));

