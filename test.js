let outer = [];

function clouseTest() {
    let arr = ['one', 'two', 'three', 'four'];  
    for (var i = 0; i < arr.length; i++) {
        var x = {};
        x.index = i;
        x.text = arr[i];
        x.invoke = function() {
            console.log(i);
        }
        outer.push(x);
    }
}


// clouseTest();
// console.log(outer[0].invoke());
// console.log(outer[0].invoke());
// console.log(outer[0].invoke());
// console.log(outer[0].invoke());


// 通过闭包实现封装
let person = function() {
    let name = 'zhangsan';
    
    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
            console.log('successful')
        }
    }
}();

// console.log(person);
console.log(person.getName());
console.log(person.setName('lisi'));