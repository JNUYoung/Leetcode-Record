var search = function(nums, target) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    return map.get(target) ?? 0;
};

var search = function(nums, target) {
    let count = 0;
    for (let num of nums) {
        if (num === target) count++;
    }
    return count;
};


var search = function(nums, target) {
    
}