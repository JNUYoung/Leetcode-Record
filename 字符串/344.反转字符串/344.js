
const reverseString = function(s) {
    const length = s.length;
    let left = 0, right = length - 1;

    while (left < right) {
        // 使用es6的解构赋值来交换两个变量的值
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
}

console.log(reverseString([1,2,3,4,5]));