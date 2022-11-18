// js中的每个对象，都是从Object.prototype对象克隆而来的

let obj1 = new Object()
let obj2 = {}

console.log(Object.getPrototypeOf(obj1) === Object.prototype)
console.log(Object.getPrototypeOf(obj2) === Object.prototype)

// 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
function foo() {
    console.log('foo')
}



// 如下代码体现了new运算符的过程
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.getName = function() {
    return this.name
}

const objectFactory = function() {
    let obj = new Object()    // 创建一个新对象
    let Constructor = [].shift.call(arguments)    // 获取构造函数
    obj.__proto__ = Constructor.prototype    // 让新对象通过原型方式继承自构造函数
    
    let ret = Constructor.apply(obj, arguments)    // 将参数传入，调用构造函数，并且构造函数的this指向新创建的obj

    return ret
}

let person1 = objectFactory(Person, "tom", 20)
console.log(person1)


// JS给对象提供了名为__proto__的隐藏属性，这个隐藏属性默认指向该对象的构造器的原型
// person1.__proto__ === Person.prototype

let person2 = new Person('zhangsan', 22)
let person3 = Object.create(person2)
console.log(person3.name, person3.age)
console.log(person3)


// ES6的class语法，背后仍然是通过原型机制来创建对象
class Animal {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

let dog = new Dog('scamp')
console.log(dog.getName())

// 原型模式是一种设计模式，也是一种编程泛型，构成了js这门语言的根本