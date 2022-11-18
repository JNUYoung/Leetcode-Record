/**
 * 2022-11-18
 * 
 * 26.删除有序数组中的重复项
 *      给定一个升序排序的数组，原地删除重复出现的元素，返回删除后数组的新长度
 */

var removeDuplicates = function(nums) {
    let slowPtr = 0, fastPtr = 0
    nums[slowPtr] = nums[fastPtr]
    for (fastPtr = 1; fastPtr < nums.length; fastPtr++) {
        if (nums[fastPtr] !== nums[slowPtr]) {
            slowPtr++
            nums[slowPtr] = nums[fastPtr]
        }
    }
    return slowPtr + 1
}

let arr = [0,0,1,1,1,2,2,3,3,4,4]
console.log(removeDuplicates(arr))

let arr1 = [1,1,2]
console.log(removeDuplicates(arr1))