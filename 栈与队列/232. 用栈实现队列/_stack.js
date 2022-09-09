class stack {
    constructor() {
        this.item = [];
    }
    push(element) {
        this.item.push(element);
    }
    // 弹出栈顶元素
    pop() {
        return this.item.pop();
    }
    // 返回栈顶元素
    peek() {
        return this.item.length ? this.item[this.item.length - 1] : undefined;
    }
    // 清除栈中所有元素
    clear() {
        this.item = [];
    }
    // 判断栈是否为空
    isEmpty() {
        return this.item.length === 0;
    }
    // 返回栈中元素个数
    size() {
        return this.item.length;
    }
    // 
    toString() {
        return this.item.toString();
    }
}   



// 
var result = [];
var a = 3;
var total = 0;

function foo(a) {
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function() {
      total += i * a;
      console.log(total);
    }
  }
}

function foo(a) {
    for (let i = 0; i < 3; i++) {
      result[i] = function() {
        total += i * a;
        console.log(total);
      }
    }
  }

// foo(1);
// console.log(result[0]());    // 3, 6, 9
// console.log(result[1]());    // 3, 6, 9
// console.log(result[2]());    // 3, 6, 9

foo(2);
console.log(result[0]());    // 6, 12, 18
console.log(result[1]());    // 6, 12, 18
console.log(result[2]());    // 6, 12, 18
