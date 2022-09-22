/**
 * 303.区域和检索-数组不可变
 * 难度：简单
 * 
 * sumRange(int i, int j) 返回数组中索引i和j之间的元素的总和，包含边界
 * 
 * 本题的需求为：sumRange方法会被反复调用若干次，因此需要设计时间复杂度低的算法
 * 即使没有说明方法的调用频率，在设计类中的方法时，也需要考虑该方法会被多次调用，从而优化复杂度
 * 
 */


const sumRange = function(nums, left, right) {
    if (left < 0 || right > nums.length - 1) return "Error";
    
    // 初始化一个空数组，记录各个索引处的累加和
    let sumArray = new Array(nums.length).fill(0);
    // 填充该数组
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        sumArray[i] = tempSum;
    }
    console.log(sumArray);

    if (left === 0) return sumArray[right];
    return sumArray[right] - sumArray[left - 1];
}

console.log(sumRange([-2, 0, 3, -5, 2, -1], 0, 5));


// 构造函数和原型的写法
var NumArray = function(nums) {
    this.sumArray = new Array(nums.length).fill(0);
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        this.sumArray[i] = tempSum;
    }
}

NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.sumArray[right];
    return this.sumArray[right] - this.sumArray[left - 1];
}