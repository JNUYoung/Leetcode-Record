var CQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
}

/**
 * @param {number} value
 * @return {void} 
 */
CQueue.prototype.appendTail = function(value) {
    this.stackIn.push(value);
}

/**
 * 
 * @returns {number} 
 */
CQueue.prototype.deleteHead = function() {
    if (this.stackOut.length) return this.stackOut.pop();
    while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop() || -1;
}