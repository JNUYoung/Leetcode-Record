/**
 * leetcode-349.两个数组的交集
 * 
 *      给定两个数组nums1和nums2，返回它们的交集，不考虑输出结果的顺序
 */

const myTypeOf = function(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

const intersection = function(nums1, nums2) {
    nums1 = Array.from(nums1)
    nums2 = Array.from(nums2)

    const res = []
    const s = new Set(nums1)
    for (const num of nums2) {
        if (s.has(num) && (!res.includes(num))) {
            res.push(num)
        }
    }
    return res
}

// simplication version
const intersection1 = (nums1, nums2) => Array.from(new Set(nums1.filter(num=>nums2.includes(num))))


// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]
let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2))

let str1 = 'hello world'
let str2 = 'hello javascript'
console.log(intersection(str1, str2))

console.log(intersection1(nums1, nums2))