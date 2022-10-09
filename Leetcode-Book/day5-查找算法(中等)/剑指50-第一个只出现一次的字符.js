var firstUniqChar = function(s) {
    let map = new Map();
    for (const char of s) {
        map.set(char, map.get(char) ? map.get(char) + 1: 1);
    }

    for (let [key, value] of map.entries()) {
        if (value === 1) return key;
    }

    return " ";
}

let str = "leetcode";
console.log(firstUniqChar(str));

