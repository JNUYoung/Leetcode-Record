// js的plain object本质上是键值对的集合，传统上只能使用字符串作为键
// ES6提出的Map数据结构，类似于对象，也是键值对的集合，但是key的范围不局限于字符串，所有类型的值都可以作为Map的key

// Map.prototype.set(key, value)
// Map.prototype.get(key)
// Map.prototype.has(key)
// Map.prototype.delete(key)
// Map.prototype.clear()
// map.size

// basic usage
const m = new Map()
const o = {
    name: 'zhangsan'
}
m.set(o, 'name')
console.log(m)
console.log(m.has(o))
console.log(m.get(o))

// map也可以接受一个数组，数组的成员是一个个表示键值对的数组
const kvArr = [
    ['name', 'lisi'],
    ['age', 20]
]
const m1 = new Map(kvArr)
console.log(m1.has('name'))
console.log(m1.get('age'))

// equal to
const m2 = new Map()
kvArr.forEach(([key, value]) => {
    m2.set(key, value)
})
console.log(m2)

// 任何具有Iterator接口，且每个成员都是一个双元素的数组的数据结构，都可以当作Map构造函数的参数

// 对同一个key多次赋值会进行覆盖
console.log(m2.get('name'))
m2.set('name', 'wangwu')
console.log(m2.get('name'))

// 只有对同一对象的引用才视为同一个key
const m3 = new Map()
const obj = {a: 100}
m3.set(obj, true)
console.log(m3.get({a: 100}))    // undefiend
console.log(m3.get(obj))    // true