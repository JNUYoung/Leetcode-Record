const arr = new Array()
console.log(Object.prototype.toString.call(arr).slice(8,-1))

function foo() {}

arr.push(0, 1, 'hello', foo, {name: 'bar'}, Symbol('age'))
console.log(arr)


/**
 * JSArray - JSObject
 * key-value pair
 * 
 * 快数组 fast elements
 * 慢数组 dictionary elements
 *      快数组和慢数组的区别
 *      快数组和慢数组的转换
 */

/**
 * 1.传统意义的数组
 * 2.JS中的数组的特别之处
 *      - 数组中可以包含任意类型的元素
 *      - 数组可以动态改变容量:扩容和收缩
 *      - 数组可以表现得像栈一样,也可以表现得像队列一样
 *      - JS提供了很多对数组进行操作的方法
 * 3.JS数组的底层实现
 *      - v8使用了两种数据结构实现数组,快数组牺牲空间来换取时间,慢数组牺牲时间来换取空间;
 * 4.JS数组的两种模式
 * 
 * 参考文章:https://www.cnblogs.com/vivotech/p/12029196.html
 */


// fast elements,超过1024个空元素
let arr1 = [1,2]
arr1[1027] = 100
console.log(arr1)    // [ 1, 2, <1025 empty items>, 100 ]

