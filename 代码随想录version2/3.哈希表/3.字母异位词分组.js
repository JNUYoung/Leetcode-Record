/**
 * leetcode49.字母异位词分组
 * 
 * 给定一个字符串数组，将字母异位词组合在一起，按任意顺序返回结果列表
 */

// const m1 = new Map()
// m1.set("a", 100)
// m1.set("b", 200)

// const m2 = new Map()
// m2.set("b", 200)
// m2.set("a", 100)

// console.log(m1.toString() == m2.toString())

var groupAnagrams = function(strs) {
    let map = new Map()
    strs.forEach((str)=>{
        const m = Array.from(str).sort().toString()
        let value = map.get(m) ? map.get(m) : new Array()
        value.push(str)
        map.set(m, value)
    })
    return [...map.values()]
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))