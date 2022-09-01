/**
 * 四数相加  middle
 * 描述：给定四个整数数组，长度都是n，从四个数组中各取一个元素，计算有多少个元组(i, j, k, l)能满足相加等于0
 * 返回：满足条件的元组的数目
 */

// 排序？

const fourSumCount = function(nums1, nums2, nums3, nums4) {
    const sum_map = new Map();
    let res = 0;

    for (const item1 of nums1) {
        for (const item2 of nums2) {
            let two_sum = item1 + item2;
            sum_map.set(two_sum, sum_map.has(two_sum)? sum_map.get(two_sum)+1:1);
        }
    }

    for (const item3 of nums3) {
        for (const item4 of nums4) {
            let two_sum = item3 + item4;
            res += sum_map.get(0 - two_sum) || 0;
        }
    }

    return res;
}

// x + y + z + q = 0
// 转换为 (x+y) + (z+q) = 0
// 两个数组的和，作为hash表的key，value为该和出现的次数
// 使用另外两个数组的和，来查找hash表中是否存在相加等于0的key

