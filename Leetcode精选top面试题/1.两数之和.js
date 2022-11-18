const twoSum = function(nums, target) {
    const nums_type = Object.prototype.toString.apply(nums).slice(8, -1);
    if (nums_type !== "Array") {
        if (nums_type === 'String') {
            if ([...nums].every((item)=>typeof parseInt(item) === 'number')) {
                nums = Array.from(nums).map((item)=>parseInt(item));
            }
        } else {
            throw TypeError(`expected an array, but got ${typeof nums}`);
        }
    }
    const myMap = new Map();
    // Map的key为数组元素的值，value为数组元素的索引
    for (const [idx, item] of nums.entries()) {
        if (myMap.has(target - item)) {
            return [myMap.get(target - item), idx];
        }
        myMap.set(item, idx);
    }
    return [];
}



const param = [1, 2, 3];
console.log(twoSum(param, 4));
console.log(twoSum("123456789", 10));