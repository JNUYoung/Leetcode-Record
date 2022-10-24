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

forEach: 原数组上进行操作;
map: 返回新数组;
every: 检查数组每个元素;
some: 数组任一元素满足即可;
filter: 过滤并返回满足条件的子数组;

4.创建m*n的二维数组，所有元素用0填充

```js
let m = 10, n = 5;
const arr = new Array(m).fill(0).map(()=>new Array(n).fill(0))
```
