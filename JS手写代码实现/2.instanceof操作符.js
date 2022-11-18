/**
 * instanceof操作符的原理，就是根据对象的原型链来进行判断
 * 
 * revision：
 * 如何获取变量的类型
 * 1.typeof
 * 2.instanceof
 * 3.Object.prototype.toString.apply().slice(8,-1)
 */

const _instanceof = function(target, Fn) {
    /**
     * 判断Fn.prototype是否存在于target的原型链上
     * 
     * target: 要判断的实例对象
     * Fn：要判断的构造函数
     */
    // 首先，判断target是否为真正的对象类型
    if ((typeof target !== 'object' && typeof target !== 'function') || typeof target === null) {
        return false;
    }

    let proto = target.__proto__;
    // 沿着原型链进行查找，直到找到最顶层的对象的原型
    while (true) {
        if (proto === null) return false;
        if (proto === Fn.prototype) return true;
        // proto已经是target的原型对象，proto.__ptoto__相当于是target的原型对象的原型对象
        proto = proto.__proto__;
    }
 }

 