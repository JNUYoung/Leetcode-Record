// 鸭子类型：如果一个东西走起路来像鸭子，叫起来也像鸭子，那么它就是一只鸭子

let duck = {
    type: "duck",
    duckSing() { console.log('gagaga') }
}

let chicken = {
    type: 'chicken',
    duckSing() { console.log('gagaga')}
}

const choir = [];

function addChoir(animal, choir) {
    if (animal && typeof animal.duckSing === 'function') {
        choir.push(animal);
    }
}

addChoir(duck, choir)
addChoir(chicken, choir)
console.log(choir)

// 利用鸭子语言的特性，我们可以只关注对象的功能，实现面向接口编程，而不是面向实现编程


// 把不变的部分隔离出来
let makeSound = function(animal) {
    animal.sound();
}

// 把可变的部分封装起来
let Duck = function() {}
Duck.prototype.sound = () => console.log('gagaga')
let Chicken = function() {}
Chicken.prototype.sound = () => console.log('gegege');

makeSound(new Duck())
makeSound(new Chicken())
// 当要增加一些新对象时，就会更加方便，而不用再去修改makeSound函数。
let Dog = function(){}
Dog.prototype.sound = () => console.log('wangwangwang');
makeSound(new Dog())


// 封装
// 1.封装数据,依赖变量的作用域来实现
let myObj = function() {
    let _name = "young"
    let _age = 23
    return function getMsg() {
        return {name: _name, age: _age}
    }
}

const userInfo = myObj()()
console.log(userInfo.name, userInfo.age)

/**
 * 2.封装实现
 *      封装的目的是将信息进行隐藏,不单单是隐藏数据,还包括隐藏方法的实现细节等;
 *      封装使得对象内部的变化对其它对象是不可见的,当修改对象时,只要其对外暴露的接口没有变化,那么就不会影响依赖该对象的程序的其他功能
 */



// 基于原型链的委托机制就是原型继承的本质.

console.log(Object.keys(Object.prototype))
console.log(Object.prototype.toString)