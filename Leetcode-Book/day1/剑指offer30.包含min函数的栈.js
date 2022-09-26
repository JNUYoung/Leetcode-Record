/***
 * 剑指offer 30. 包含min函数的栈
 * 
 * 定义栈的数据结构，在该类型中实现一个能够得到栈的最小元素的min函数在栈中，调用min、push及pop的时间复杂度都是O（1）
 */

// var MinStack = function() {
//     this.stack = [];
//     this.minPtr = null;
//     this.maxPtr = null;
// }

// MinStack.prototype.push = function(x) {
//     if (this.stack.length === 0) {
//         this.stack.push(x);
//         this.minPtr = this.stack.indexOf(x);
//         this.maxPtr = this.stack.indexOf(x);
//     } else {
//         this.stack.push(x);
//         if (x > this.stack[this.maxPtr]) {this.maxPtr = this.stack.indexOf(x)};
//         if (x < this.stack[this.minPtr]) {this.minPtr = this.stack.indexOf(x)};
//     }
// }

// MinStack.prototype.pop = function() {
//     if (this.maxPtr === this.stack.length - 1 || this.minPtr === this.stack.length - 1) {
//         this.stack.pop();
//         if (this.stack.length) {
//             let minValue = this.stack[0], maxValue = this.stack[0];
//             for (let i = 0; i < this.stack.length - 1; i++) {
//                 let temp = this.stack[i];
//                 if (temp > maxValue) {maxValue = temp} 
//                 else if (temp == maxValue) continue 
//                 else {minValue = temp}
//             }
//             this.minPtr = this.stack.indexOf(minValue);
//             this.maxPtr = this.stack.indexOf(maxValue);
//         }
//     } else {
//         this.stack.pop();
//     }
// }

// MinStack.prototype.top = function() {
//     if (this.stack.length) return this.stack[this.maxPtr];
// }

// MinStack.prototype.min = function() {
//     if (this.stack.length) return this.stack[this.minPtr];
// }


// let obj = new MinStack()
// console.log(obj.push(-2));
// console.log(obj.push(0));
// console.log(obj.push(-3));
// console.log(obj.min());
// // console.log(obj.top());
// console.log(obj.pop());
// console.log(obj);
// console.log(obj.top());
// console.log(obj.min());



// 借用一个辅助栈，该辅助栈，存储栈中每个元素为栈顶元素时，栈内元素的最小值
// 对于栈来说，如果一个元素a入栈时，栈中已有b，c，d元素，那么只要a还在栈中，那么b、c、d也一定会在栈中
// 因此，在元素入栈时，将当前栈中所有元素的最小值存储在辅助栈中对应的位置，就可以实现O（1）的时间复杂度
var MinStack = function() {
    this.stack = [];
    this.sub_stack = [];
}

MinStack.prototype.push = function(x) {
    if (this.stack.length === 0) {
        this.stack.push(x);
        this.sub_stack.push(x);
    } else {
        this.stack.push(x);
        // if (x < this.sub_stack[this.sub_stack.length - 1]) {
        //     this.sub_stack.push(x);
        // } else {
        //     this.sub_stack.push(this.sub_stack[this.sub_stack.length - 1]);
        // }
        this.sub_stack.push(Math.min(this.sub_stack[this.sub_stack.length - 1], x));
    }
}

MinStack.prototype.pop = function() {
    this.stack.pop();
    this.sub_stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.min = function() {
    return this.sub_stack[this.sub_stack.length - 1];
}