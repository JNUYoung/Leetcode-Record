/**
 * 2022-11-18
 */

var removeElement = function(nums, val) {
    let n = nums.length     // 数组初始的长度
    for (let i = 0; i < n; i++) {
        if (nums[i] === val) {
            for (let j = i + 1; j < n; j++) {
                nums[j - 1] = nums[j]
            }
            i--     // 原本索引为i的元素等于val，删除后，将i减1保证没有漏掉元素
            n--     // 删除一个元素后，让数组长度减1
        }
    }
    return n;
}

let arr = [3,2,2,3]
console.log(removeElement(arr, 2))
console.log(arr)


// 双指针方法
var removeElement = function(nums, val) {
    let n = nums.length
    let fastPtr = 0, slowPtr = 0
    while (fastPtr < n) {
        if (nums[fastPtr] !== val) {
            nums[slowPtr] = nums[fastPtr]
            slowPtr++
        }
        fastPtr++
    }
    // 结束循环后，慢指针指向的是边界后一位的索引，直接返回即可
    return slowPtr
}

let arr1 = [3,2,2,3]
console.log(removeElement(arr1, 2))

// more elegant
var removeElement = function(nums, val) {
    let slowPtr = 0
    for (let fastPtr = 0; fastPtr < nums.length; fastPtr++) {
        if (nums[fastPtr] !== val) {
            nums[slowPtr++] = nums[fastPtr]
        }
    }
    return slowPtr
}

let arr2 = [3,2,2,3]
console.log(removeElement(arr2, 2))
