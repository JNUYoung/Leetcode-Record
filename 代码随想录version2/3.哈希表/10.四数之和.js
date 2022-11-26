// 在两数之和中,利用hash表来存储已经访问过的数组的元素的值以及索引,往后遍历的过程中查找hash表中是否存在目标元素即可
// 在三数之和中,我们利用一次遍历,每次遍历的过程中,通过对剩下的数组元素通过双指针遍历,但一个关键的地方就在于去重,这样才能保证没有重复的元素

/**
 * leetcode 18.四数之和
 * 
 * 给定由n个整数组成的数组和一个目标值target,找出满足nums[a]+nums[b]+nums[c]+nums[d]===target的无重复的四元组,abcd互不相等
 */

 var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < len - 3; i++) {
        // 去重i
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < len - 2; j++) {
            // 去重j
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1;
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target) { l++; continue}
                if(sum > target) { r--; continue}
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[++l]);
                while(l < r && nums[r] === nums[--r]);
            }
        } 
    }
    return res;
};

console.log(fourSum([1,0,-1,0,-2,2], 0))


console.log(Math.pow(2, 53))
console.log(Math.pow(2, 53) + 1)
console.log(Math.pow(2, 53) + 2)