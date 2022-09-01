const twoSum = function(nums, target) {
    const my_map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (my_map.has(target - nums[i])) {
            return [i, my_map.get(target-nums[i])];
        }

        my_map[nums[i]] = i;
    }

    return [];
}

