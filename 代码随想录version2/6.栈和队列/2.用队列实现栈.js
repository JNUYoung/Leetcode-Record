/**
 * leetcode225.用队列实现栈
 */

 var MyStack = function() {
    this.queue1 = []
    this.queue2 = []
};

/**
 *  queue1为主队列，queue2为辅助队列
 *  栈顶元素始终是queue1的末尾的元素
 *      1.入栈操作：直接push进queue1
 *      2.出栈操作：将queue1中除末尾元素的所有元素按顺序推入queue2，然后将queue1剩下的末尾元素出队，然后再将queue2中所有元素按顺序推入queue1中
 *      【相当于queue2只是暂时用于存放queue1中栈顶元素以外的元素，并且保证了它们的顺序不变】
 */

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift())
    }
    const ans = this.queue1.shift()
    while (this.queue2.length) {
        this.queue1.push(this.queue2.shift())
    }
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[this.queue1.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !(this.queue1.length || this.queue2.length)
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */