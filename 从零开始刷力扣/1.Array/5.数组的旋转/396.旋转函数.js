/**
 * 396.旋转函数
 * 
 * 给定一个长度为n的整数数组nums, 假设arrk是nums旋转k个元素后的数组
 * 计算旋转k个元素后的数组的旋转函数F的值,索引×元素值求和
 * 
 * 返回k个旋转数组中的, 旋转函数F得到的最大值
 */


// 方法一:暴力方法
// 遍历k次,得到k个旋转后的数组,计算不同k对应的旋转数组的F值,返回其中最大值
// O(n * k)



// 方法二:
// 将数组中较大的元素尽可能旋转到数组的末尾,让其索引值也更大
// 如何做到? 贪心?



// 方法三: 找相邻的递推关系
/**
 * 可以这样思考:
 * k每增加1,相当于数组向右移动了一位.
 * 所以,相当于:
 * (1)每个元素的索引+1, 所以当前F函数的结果, 需要加上数组元素的和
 * (2)但是, 最后一位元素会移动到第一位, 第一步中对于最后一个元素, 加上了 n * lastElement
 * (3)所以,再减去 n*最后一个元素的值,即得到再旋转一位后的数组的F函数值
 */

// !向右旋转一次，就相当于把当前结果加上整个数组的和，再减去数组大小乘以当前最后一位。
var maxRotateFunction = function(nums) {
    function F(nums) {
        let nums_sum = 0;
        for (const [index, value] of nums.entries()) {
            nums_sum += index * value;
        }
        return nums_sum;
    }
    let max_value = F(nums);
    const n = nums.length;
    // 数组中所有元素的和
    const nums_sum = nums.reduce((total, num) => total + num);
    let current_value = max_value;
    for (let i = n - 1; i > 0; i--) {
        current_value = current_value + nums_sum - nums[i] * n;
        max_value = Math.max(max_value, current_value);
    }

    return max_value;
}

console.log(maxRotateFunction([4,3,2,6]));


// modified version
const maxRotateFunction = function(nums) {
    let f = 0, n = nums.length, nums_sum = nums.reduce((total, num) => total + num);
    for (let i = 0; i < n; i++) {
        f += i * nums[i];
    }
    let res = f;
    for (let i = n - 1; i > 0; i--) {
        f += nums_sum - n * nums[i];
        res = Math.max(res, f);
    }
    return res;
}