
const fourSum = function(nums, target) {
    let res = [];
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i++) {
        let i_value = nums[i];
        // if (i_value > target) return res;
        for (let j = i + 1; j < nums.length; j++) {
            let j_value = nums[j];
            let left_ptr = j + 1;
            let right_ptr = nums.length - 1;
        
            // if ((nums[i] + nums[j]) > target) return res;
            if (j > 0 && nums[j-1] === nums[j]) continue;

            while (left_ptr < right_ptr) {
                let left_value = nums[left_ptr];
                let right_value = nums[right_ptr];
                let cur_sum = i_value + j_value + left_value + right_value;
                if (cur_sum < target) {
                    left_ptr++;
                } else if (cur_sum > target) {
                    right_ptr--;
                } else {
                    res.push([i_value, j_value, left_value, right_value]);
                    while (left_ptr < right_ptr && nums[left_ptr] === nums[left_ptr+1]) {left_ptr++}
                    while (left_ptr < right_ptr && nums[right_ptr] === nums[right_ptr - 1]) {right_ptr--}
                    left_ptr++;
                    right_ptr--;
                }
            }
        }
    }
    return res;
}

console.log(fourSum([1,0,-1,0,-2,2], 0));