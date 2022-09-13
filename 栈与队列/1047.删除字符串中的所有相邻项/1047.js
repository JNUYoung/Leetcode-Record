
const removeDuplicates = function(s) {
    let myStack = [],
        charArray = s.split("");
    
    for (let i = 0; i < charArray.length; i++) {
        if (myStack.length !== 0 && myStack[myStack.length - 1] === charArray[i]) {
            myStack.pop();
        } else {
            myStack.push(charArray[i]);
        }
    }

    return myStack.join("");
}

console.log(removeDuplicates('abbacabaccac'));