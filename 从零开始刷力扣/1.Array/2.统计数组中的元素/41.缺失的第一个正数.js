// 41.缺失的第一个正数

var firstMissingPositive = function(nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, 1);
    }
    const n = nums.length;
    for (let i = 1; i <= n; i++) {
        if (!map.has(i)) return i; 
    }

    return n + 1;
}