/**
 * 454.四数相加Ⅱ
 * 给定四个整数数组 nums1、nums2、nums3、nums4，数组长度都是n，计算有多少个元组（i，j，k，l）
 * 满足nums1[i] + nums2[j] + nums3[k] + nums4[l] = 0 
 */

// const fourSumCount = function(nums1, nums2, nums3, nums4) {
//     const m = new Map()
//     let res = []
    
//     for (let [index1, value1] of nums1.entries()) {
//         for (let [index2, value2] of nums2.entries()) {
//             let tempSum = value1 + value2
//             if (!m.has(tempSum)) {
//                 m.set(tempSum, [[index1, index2]])
//             } else {
//                 let temp = m.get(tempSum)
//                 m.set(tempSum, temp.push([index1, index2]))
//             }
//         }
//     }

//     for (let [index3, value3] of nums3.entries()) {
//         for (let [index4, value4] of nums4.entries()) {
//             let tempSum = value3 + value4
//             let target =  0 - tempSum
//             if (m.has(target)) {
//                 m.get(target).forEach((item)=>res.push(item))
//             }
//         }
//     }

//     return res.length
// }

// let nums1 = [1, 2]
// let nums2 = [-2, -1]
// let nums3 = [-1, 2]
// let nums4 = [0, 2]

// let nums1 = [0]
// let nums2 = [0]
// let nums3 = [0]
// let nums4 = [0]

let nums1 = [-1,-1]
let nums2 = [-1,1]
let nums3 = [-1,1]
let nums4 = [1,-1]
// console.log(fourSumCount(nums1, nums2, nums3, nums4))

const _fourSumCount = function(num1, nums2, nums3, nums4) {
    const m = new Map()
    let res = 0

    for (const n1 of nums1) {
        for (const n2 of nums2) {
            let tempSum = n1 + n2
            m.set(tempSum, m.has(tempSum) ? m.get(tempSum) + 1 : 1)
        }
    }

    for (const n3 of nums3) {
        for (const n4 of nums4) {
            let target = 0 - n3 - n4
            res += m.get(target) ?? 0
        }
    }

    return res
}
console.log(_fourSumCount(nums1, nums2, nums3, nums4))