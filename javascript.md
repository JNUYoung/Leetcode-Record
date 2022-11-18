1.数组求和

```js
[1, 2, 3].reduce((res, num) => res + num, 0);
```

2.数组concat方法阻止默认的一维扁平化

```javascript
const arr = [1, 2, 3];
const arr1 = [4, 5];
arr1[Symbol.isConcatSpreadable] = false;
arr.concat(arr1);    // [1, 2, 3, [4, 5]]
```

3.常用的数组迭代方法

> forEach: 原数组上进行操作;
> map: 返回新数组;
> every: 检查数组每个元素;
> some: 数组任一元素满足即可;
> filter: 过滤并返回满足条件的子数组;

4.创建m*n的二维数组，所有元素用0填充

```js
let m = 10, n = 5;
const arr = new Array(m).fill(0).map(()=>new Array(n).fill(0))
```

5.检查变量的类型

```js
const arr = [1, 2, 3];

function myTypeOf(element) {
    return Object.prototype.toString.apply(element).slice(8, -1);
}
```

6.数组的扩展运算符 spread syntax ——将数组元素展开为逗号分隔的元素序列

```js
const origin_arr = ['a', 'b', 'c'];
// 1.复制数组
const arr1 = [...origin_arr];
// 2.合并数组
const arr2 = [...origin_arr, ...arr2]
// 3.结合解构赋值
const [a, ...b] = [1, 2, 3];
// 4.字符串 -> 数组
const str ="hello";
const str_arr = [...str];

```

7.Array.from()

* 可以接收第二个参数，作用与数组实例的map方法类似；

8.Array.at() 方法

> 长久以来，js不支持数组的负索引，因为方括号不仅用于数组的索引，更广义来看，js中的括号表示对于对象的属性的索引，因为js中可以认为万物皆对象。
>
> 因此，对数组通过方括号进行负索引，查找的其实是这个数组对象的属性名为-1的属性值，但是实际上不存在-1的key，所以会导致错误。
>
> ES2022增加了数组实例的at方法，返回对应位置的元素，不仅可用于数组，还可以用于字符串或类数组；

```js
const arr = [1, 2, 3];
let last_ele = arr.at(-1);

const str = "hello";
let last_char = str.at(-1);
```

9.对数组随机重新排序

```javascript
const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5 ); 
```

10.数组去重

```js
const unique = (arr) => [...new Set(arr)];
```
