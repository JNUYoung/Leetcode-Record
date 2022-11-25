const twoSum = function(nums, target) {
    const m = new Map()

    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i]
        if (m.has(target - curNum)) {
            return [i, m.get(target - curNum)]
        } 
        m.set(curNum, i)
    }
    return []
}

// let nums = [2, 7, 11, 15]
// let target = 9
// let nums = [3, 2, 4]
// let target = 6
let nums = [3, 3]
let target = 6
console.log(twoSum(nums, target))