function threeSum(nums: number[]): number[][] {
    nums.sort((a,b)=>a - b);
    let length: number = nums.length;
    let left: number = 0,
        right: number = length - 1;
    let resArr: number[][] = [];

    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            return resArr;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        left = i + 1;
        right = length - 1;

        while (left < right) {
            let total: number = nums[i] + nums[left] + nums[right];
            if (total < 0) {
                left += 1;
            } else if (total > 0) {
                right -= 1;
            } else {
                resArr.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left + 1]===nums[left]) {
                    left += 1;
                }
                while (left < right && nums[right]===nums[right - 1]){
                    right -= 1;
                }
            }
        }
    }
    return resArr;
}