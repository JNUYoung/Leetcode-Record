
const evalRPN = function(tokens) {
    const myStack = [];
    const operArray = ["+", "-", "*", "/"];
    const n = tokens.length;

    for (let i = 0; i < n; i++) {
        const token = tokens[i];
        // using  isNumber(token) 判断是否为数值类型
        if (!operArray.includes(token)) {
            myStack.push(token);
        } else {
            // 先出栈的是右操作数
            let temp2 = parseInt(myStack.pop());
            // 后出栈的是左操作数
            let temp1 = parseInt(myStack.pop());
            let tempRes = 0;
            switch (token) {
                case "+":
                    tempRes = temp1 + temp2;
                    break;
                case "-":
                    tempRes = temp1 - temp2;
                    break;
                case "*":
                    tempRes = temp1 * temp2;
                    break;
                case "/":
                    tempRes = temp1 / temp2;
                    break;
            }
            myStack.push(tempRes);
        }
    }

    return parseInt(myStack.pop());
}


console.log(evalRPN(["4","13","5","/","+"]));