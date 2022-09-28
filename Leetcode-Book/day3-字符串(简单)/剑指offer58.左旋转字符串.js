// 第一种方法：
// 将字符串分为两个子串，然后交换两个子串的顺序，再拼接到一起
var reverseLeftWords = function(s, n) {
    let res = [];
    let left_part = s.slice(0, n);
    let right_part = s.slice(n, s.length);

    res.push(right_part);
    res.push(left_part);

    return res.join("");
}

console.log(reverseLeftWords("lrloseumgh", 6));

// 第二种方法
// 1.首先将前n个字符反转；
// 2.然后将后面剩余的字符反转；
// 3.最后将整个字符串反转；
var reverseLeftWords = function(s, n) {
    const myReverse = function(my_str, start, end) {
        return Array.from(my_str.slice(start, end)).reverse().join("");
    }
    return myReverse(myReverse(s, 0, n) + myReverse(s, n, s.length), 0, s.length);
}


console.log(reverseLeftWords("lrloseumgh", 6));