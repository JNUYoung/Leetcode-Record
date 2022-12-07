/**
 * leetcode347.前k个高频元素
 * 
 * 给定一个整数数组nums和一个整数k，返回出现频率前k高的元素
 */

// 1.统计数组中元素出现的频率（map）
// 2.对统计的频率进行排序（小顶堆）
// 3.找出前k个高频元素

var topKFrequent = function(nums, k) {
    const m = new Map();
    for (const num of nums) {
        m.set(num, m.get(num)??0 + 1)
    }
    const queue = []
    for (const [key, value] of m.entries()) {
        queue.push([key, value])
    }
    queue.sort((prev, cur) => {
        return cur[1] - prev[1]
    })
    const ans = []
    for (let i = 0; i < k; i++) {
        ans.push(queue[i][0])
    }

    return ans
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))


// 利用“堆”数据结构
// 1.遍历数组统计每个数字出现的次数
// 2.建立一个小顶堆
//    - 遍历数字出现次数的数组
//    - 如果堆中的元素个数小于k，则可以直接插入堆中
//    - 如果堆中的元素个数等于k，则检查堆顶元素与当前遍历的元素的大小，
//      如果当前元素更大，那么弹出堆顶元素，将当前元素加入堆中
//      如果堆顶元素更大，那么继续遍历

// 构造堆
class Heap {
    // 根据比较函数compareFn来决定是小顶堆还是大顶堆
    constructor(compareFn) {
        this.compareFn = compareFn
        this.queue = []
    }

    // insert element into heap
    push(item) {
        this.queue.push(item)
        let index = this.size() - 1    // 插入的元素的下标
        let parentIndex = Math.floor((index - 1) / 2)    // 根据叶子节点计算父亲节点的下标
        // 如果
        while (parent >= 0 && this.compareFn(parentIndex, index) > 0) {

        }
    }
}