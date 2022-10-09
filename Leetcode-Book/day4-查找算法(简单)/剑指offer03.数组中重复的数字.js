/**
 * 描述：在一个长度为n的数组nums里的所有数字都在0——n-1的范围内，某些数组是重复的，找出数组中任意一个重复的数字
 */

// 利用map
var findRepeatNumber = function(nums) {
    let map = new Map();
    for (let num of nums) {
        if (map.get(num) >= 1) return num;
        else {
            map.set(num, map.get(num) ?? 0 + 1);
        }
    }
}


// 原地交换
var findRepeatNumber = function(nums) {
    let i = 0;
    while (i < nums.length) {
        //! 只有nums[i] === i时，i才递增，这样才能保证在找到相同的元素前，不会漏掉某些元素
        if (nums[i] === i) {
            i += 1;
            continue;
        }
        if (nums[i] === nums[nums[i]]) {
            return nums[i];
        } 
        [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
}

console.log(findRepeatNumber([3,4,2,1,1,0]));