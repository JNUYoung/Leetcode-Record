// 一个输入栈，一个输出栈

// 输入栈按照队列的入队顺序，将元素依次入栈
// 当要将元素出队时，首先检查输出栈是否还有元素，如果还有元素则直接出栈，如果没有元素，则将输入栈所有元素依次弹出并压入输出栈

function MyQueue() {
    this.inStack = []
    this.outStack = []
}

// push(x) 将元素x推入队列末尾
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
}

// pop() 从队列开头移除并返回元素
MyQueue.prototype.pop = function() {
    if (this.outStack.length) {
        return this.outStack.pop()
    }
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop())
    }
    return this.outStack.pop()
}

// peek() 返回队列开头的元素
MyQueue.prototype.peek = function() {
    return this.outStack.length ? this.outStack[this.outStack.length - 1] : this.inStack[0]
}

// empty() 队列判空
MyQueue.prototype.empty = function() {
    return !(this.inStack.length || this.outStack.length)
}