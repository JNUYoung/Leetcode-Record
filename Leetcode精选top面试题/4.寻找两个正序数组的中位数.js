// 暴力方法，将两个数值合并并排序，然后根据数组长度的奇偶来返回对应的中位数
var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArr = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = mergeArr.length;
    if (n % 2 === 0) {
        return (mergeArr[parseInt(n / 2) - 1] + mergeArr[parseInt(n / 2)]) / 2;
    } else {
        return mergeArr[parseInt(n / 2)];
    }
}

console.log(findMedianSortedArrays([1,3], [2]));




// 方法二：找到中位数的位置，无需对两个数组真的合并
// 如果两个数组的长度和为奇数，那么遍历的次数就是 parseInt(len / 2) + 1
// 如果两个数组的长度和为偶数，那么遍历的次数也是 parseInt(len / 2) + 1, 只是还需要len / 2 这个元素
var findMedianSortedArrays = function(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const len = m + n;

    // left和right记录当前循环的结果
    let left = -1, right = -1;
    // aStart和bStart分别记录当前指向两个数组的位置
    let aStart = 0, bStart = 0;

    for (let i = 0; i < parseInt(len / 2) + 1; i++) {
        left = right;    // 让left记录上一次循环的元素，right记录本次循环的元素
        // 只有num1数组还未遍历到终点时，并且num2数组已经遍历完了，或者num2数组的当前元素比num1数组大，此时，才将num1数组当前元素赋给right
        if (aStart < m && (bStart >= n || num1[aStart] <= num2[bStart])) {
            right = num1[aStart];
            aStart++;
        } else {
            right = num2[bStart];
            bStart++;
        }
    }

    // 跳出循环后，判断len的奇偶情况
    // 若len为奇数，则right记录的才是合并后的中位数
    // 若len为偶数，则(left + right) / 2才是合并后的中位数
    if (len % 2 === 0) {
        return (left + right) / 2;
    } else {
        return right;
    }
}

console.log(findMedianSortedArrays([1,3], [2]));