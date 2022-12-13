/**
 * leetcode453.最小操作次数使数组元素相等
 * 
 * 给你一个长度为n的整数数组，每次操作都会使其中n-1个元素加1，返回让数组所有元素相等的最小操作次数
 */

// my solution
/**
 * 每次让除了最大元素外的所有元素加1（贪心）
 * 1.找出当前数组最大元素的索引
 * 2.除该索引外的其它所有元素的值均加一
 * 3.判断该轮操作完成后是否元素均相等
 */
var minMoves = function(nums) {
    let moveCount = 0    // 记录需要操作的次数
    // 判断数组是否每个元素都相等
    function isEveryNumEqual(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[0]) return false
        }
        return true
    }
    // 找出当前数组最大的元素，返回其索引
    function findMax(arr) {
        let index = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[index]) {
                index = i
            }
        }
        return index
    }
    let isEqual = false
    if (isEveryNumEqual(nums)) return 0
    while (!isEqual) {
        let maxIndex = findMax(nums)
        for (let i = 0; i < nums.length; i++) {
            if (i === maxIndex) continue
            nums[i] += 1
        }
        moveCount++
        isEqual = isEveryNumEqual(nums)
    }
    return moveCount
};


// 逆向思考-找出让数组中所有元素相等的最小操作数，不需要考虑各个元素的绝对大小，只需要考虑相对大小的变化即可
// 每次操作让n-1个元素的值加1 等价于 每次操作让最大的元素的值减1
// 因此，只需要计算让数组中所有元素减小到数组元素最小值所需要的操作次数即可
var minMoves = function(nums) {
    // 1.找出数组中的最小值
    let minNum = Math.min(...nums)
    // 2.遍历数组，计算各元素与最小值的差值
    let moveCount = 0
    for (const num of nums) {
        moveCount += num - minNum
    }
    return moveCount
}