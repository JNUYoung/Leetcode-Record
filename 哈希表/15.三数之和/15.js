

// // 1.hash map的方法
// const threeSum = function(nums) {
//     const my_map = new Map();
//     let res = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j< nums.length; j++) {
//             let i_j_sum = nums[i] + nums[j];
//             let temp = [];
//             // 以数组的形式存储元素下标
//             if (my_map.has(i_j_sum)) {
//                 temp = my_map.get(i_j_sum);
//                 temp.push([i, j]);
//             } else {
//                 temp.push([i, j]);
//                 my_map.set(i_j_sum, temp);
//             }
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (my_map.has(0 - nums[i])) {
//             for (let item of my_map.get(0 - nums[i])) {
//                 if (!item.includes(i)) {
//                     item.push(i);
//                     res.push([nums[item[0]],nums[item[1]],nums[item[2]]]);
//                 }
//             }
//         } 
//     }

//     return [...new Set(res)];
// }

// console.log(threeSum([-1,0,1,2,-1,-4]));


// 2.双指针方法：
// 关键：固定一个元素，用双指针去遍历剩下的元素
// 去重： 
// 1.如果nums[i]已经大于0，那么剩下的不用再继续看了，因为已经是有序的了
// 2.如果nums[i] === nums[i-1]，那么就让i自增1，因为当前nums[i]的值已经参与到后续的三元组的计算当中了，会导致重复，因此直接i++；
// 3.在找到满足条件的三元组后，再进行去重操作
const threeSum_1 = function(nums) {
    nums.sort();
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let left_ptr = i + 1;
        let right_ptr = nums.length - 1;
        let i_value = nums[i];

        if (i_value > 0) return res;

        if (i_value == nums[i-1]) continue;

        while (left_ptr < right_ptr) {
            let left_value = nums[left_ptr];
            let right_value = nums[right_ptr];
            let temp_sum = i_value + left_value + right_value;

            if (temp_sum < 0) left_ptr++;
            else if (temp_sum > 0) right_ptr--;
            else {
                res.push([i_value, left_value, right_value]);
                while (left_ptr < right_ptr && nums[left_ptr + 1] == nums[left_ptr]) {left_ptr++;}
                while ((left_ptr < right_ptr) && nums[right_ptr - 1] == nums[right_ptr]) {right_ptr--;}
                left_ptr++;
                right_ptr--;
            }
        }
    }

    return res;
}   


console.log(threeSum_1([-1,0,1,2,-1,-4]));

console.log([-1,0,1,2,-1,-4,-2,-3,3,0,4].sort())
console.log([-1,0,1,2,-1,-4,-2,-3,3,0,4].sort((a,b)=>a-b))


// 这里踩了一个js的数组的sort方法的坑
// js中数组对象的array方法，当不传入比较函数的时候，sort方法会在每一项上调用
// String()函数,将数组每一项转化为字符串形式,再通过字符串的unicode码决定顺序
// 即使数组都是number类型,也会转化成字符串比较;

// 因此,如果在上面的代码中,仅使用nums.sort(),当存在负数时,负数的顺序就会出现问题
// 因此,在使用Array().sort()时,一定要传入compare function
