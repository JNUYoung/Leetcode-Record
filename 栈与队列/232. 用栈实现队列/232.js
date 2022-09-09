/**
 * 仅使用两个栈实现先入先出队列，支持一般队列的所有操作：push、pop、peek、empty
 * push：将元素x推入队列
 * pop：将队列首个元素出队
 * peek：返回队列开头的元素
 * empty：队列判空
 */

let MyQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
}

MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
}

MyQueue.prototype.pop = function() {
    if (this.stackOut.length) {
        return this.stackOut.pop();
    }
    // 将入栈的元素依次弹出并压入出栈中
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
}

MyQueue.prototype.peek = function() {
    const x = this.pop();
    this.stackOut.push(x);
    return x;
}

MyQueue.prototype.empty = function() {
    if (this.stackIn.length === 0 && this.stackOut.length === 0) {
        return true;
    } else {
        return false;
    }
}