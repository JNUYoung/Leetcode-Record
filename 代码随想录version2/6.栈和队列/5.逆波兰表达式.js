/**
 * leetcod150.逆波兰表达式求值
 */

const evalRPN = function(tokens) {
    const stack = []
    const operators = ['+', '-', '*', '/']

    for (const token of tokens) {
        if (!operators.includes(token)) {
            stack.push(parseInt(token))
        } else {
            const secondToken = stack.pop()
            const firstToken = stack.pop()
            switch(token) {
                case '+':
                    stack.push(firstToken + secondToken)
                    break;
                case '-':
                    stack.push(firstToken - secondToken)
                    break;
                case '*':
                    stack.push(firstToken * secondToken)
                    break;
                case '/':
                    stack.push(parseInt(firstToken / secondToken))
                    break;
            }
        }
    }

    return stack[0]
}

console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))