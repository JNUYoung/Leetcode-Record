/**
 * 71.简化路径
 * 
 * 1.先将路径字符串按'/'进行切割
 * 2.如果：
 *      . ：忽略
 *      .. ：如果存在上一级目录，则切换到上一级目录，让栈顶元素弹出
 *      空：忽略
 *      其余：入栈
 */

const simplifyPath = function(path) {
    const names = path.split("/");
    const stack = [];
    for (const name of names) {
        if (name === "..") {
            if (stack.length) {
                stack.pop();
            }
        } else if (name.length && name !== ".") {
            stack.push(name);
        }
    }

    return '/' + stack.join('/');
}

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));