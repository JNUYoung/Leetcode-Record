/**
 * @param {string} s
 * @return {boolean}
 * 
 * 栈结构的特殊性，非常适合做对称匹配类的题目
 */

//  const isValid = function(s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === "{") {
//             stack.push(s[i]);
//         } else {
//             switch(s[i]) {
//                 case ']':
//                     if (stack.length > 0) {
//                         if (stack[stack.length-1] === '[') {
//                             stack.pop(); 
//                         } else {
//                             stack.push(s[i]);
//                         }
//                     } else {
//                         return false;
//                     }
//                     break;
//                 case ')':
//                     if (stack.length > 0) {
//                         if (stack[stack.length-1] === '(') {
//                             stack.pop();
//                         } else {
//                             stack.push(s[i]);
//                         }
//                     } else {
//                         return false;
//                     }
//                     break;
//                 case '}':
//                     if (stack.length > 0) {
//                         if (stack[stack.length-1] === '{') {
//                             stack.pop();
//                         } else {
//                             stack.push(s[i]);
//                         }
//                     } else {
//                         return false;
//                     }
//                     break;
//             }
//         }
//     }
//     return stack.length === 0;
// };


var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default:
                if (stack.pop() !== s[i]) {
                    return false;
                }
        }
    }

    return stack.length === 0;
}


var isValid = function(s) {
    const stack = [],
          map = {
            "(": ")",
            "[": "]",
            "{": "}"
          };
    for (let char of s) {
        if (char in map) {
            stack.push(map[char]);
            continue;
        };
        if (char !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;
}


console.log(isValid(")"));