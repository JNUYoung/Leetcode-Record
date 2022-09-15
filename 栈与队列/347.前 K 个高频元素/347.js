/**
 * 给定一个整数数组nums和一个整数k，返回其中出现频率前k高的元素，可以按任意顺序返回答案
 * 
 * 1.统计各个元素出现的频率；
 * 2.对出现的频率进行排序；
 * 3.找出前k个高频元素；
 */


// const topKFrequent = function(nums) {
//     const numSorted = nums.sort((a, b)=>a - b);
//     const n = nums.length;
//     const numSet = [...new Set(numSorted)];
//     const res = new Array(numSet.length).fill(0);

//     let i = 0;
//     while (i < n) {
//         let j = i;
//         while (numSorted[j] === numSorted[j - 1]) {
//             j++;
//         }
//         res.push(j - i);
//         i = j;
//     }

//     let map = new Map();
//     for (let i = 0; i < numSet.length; i++) {
//         map.set(numSet[i], res[i]);
//     }

//     let ans = [];
//     for (let [key, value] of map.entries()) {
//         ans.push({key: value});
//     }

//     ans.sort((a,b)=>b.value - a.value);

//     let _ans = [];
//     for (let i = 0; i < k; i++) {
//         _ans.push(ans[i].value);
//     }

//     return _ans;
// }


// console.log(topKFrequent([1,1,1,2,2,3]));




// 利用heap数据解构，从而按出现频率的大小进行排序
class Heap {
    // 初始化
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }

    // 向堆中添加新元素
    push(item) {
        this.queue.push(item);
        // 记录当前推入元素的索引
        let index = this.queue.length - 1;
        // 记录当前推入元素的父节点的下标
        let parentIndex = Math.floor((index - 1) / 2);

        // 比较新加入的元素和其父元素的大小，根据传入的比较函数确定是大顶堆还是小顶堆
        while (this.queue.length >= 0 && this.compare(parentIndex, index)) {
            [this.queue[parentIndex], this.queue[index]] = [this.queue[index], this.queue[parentIndex]];
            // 让index始终指向新push的元素，parentIndex始终指向该元素的父元素
            // 直到不能再向上进行交换为止
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // 弹出堆顶元素
    pop() {
        const outElement = this.queue[0];    // 堆顶元素
        this.queue[0] = this.queue.pop();    // 使用最后一个元素填充堆顶被移除的元素的位置
        // 让堆顶的元素向下交换 找到其最终位置
        let index = 0;
        let left = 1;
        // 确定交换的元素是左叶子还是右叶子,使得childIndex指向两者中更小的一个节点
        let childIndex = this.compare(left, left + 1) < 0 ? left : left + 1;

        // this.compare(index, childIndex) > 0 表示 index节点的值大于childIndex节点的值,不符合小顶堆的要求,因此交换
        while (childIndex !== undefined && this.compare(index, childIndex) > 0) {
            [this.queue[index], this.queue[childIndex]] = [this.queue[childIndex], this.queue[index]];

            // 更新索引,继续向下寻找,直到该节点到达了最终的位置
            index = childIndex;
            left = 2 * index + 1;
            childIndex = this.compare(left, left + 1) < 0 ? left : left + 1;
        }

        return outElement;

    }

    size() {
        return this.queue.length;
    }

    compare(index1, index2) {
        // 处理下标越界问题
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;

        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
}


const topKFrequent = function(nums, k) {
    // 获取各个元素出现的频数
    const map = new Map();
    for (const num of nums) {
        map.set(num, map.get(num) || 0 + 1);
    }

    // 创建小顶堆,
    const heap = new Heap((a,b)=>a[1]-b[1]);

    // 传入的是map的每个[key, value]
    for (const item of map.entries()) {
        heap.push(item);
        // 每次传入一个新的[num, frequency]后,检查当前堆的大小是否大于k;
        // 因为传入的过程严格按照了小顶堆的要求，因此直接弹出堆顶的元素即可；
        if (heap.size() > k) {
            heap.pop();
        }
    }

    const res = [];

    // 最后堆中剩下的k个顶点，就是剩下的出现次数前k多的元素
    for (let i = heap.size() - 1; i >= 0; i--) {
        res[i] = heap.pop()[0];
    }

    return res;
}


console.log(topKFrequent([1,1,1,2,2,3], 2));