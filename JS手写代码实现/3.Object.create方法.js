// 以传入的对象做为新创建对象的原型

Object.prototype._create = function(obj) {
    const Fn = function() {};
    Fn.prototype = obj;
    return new Fn();
}