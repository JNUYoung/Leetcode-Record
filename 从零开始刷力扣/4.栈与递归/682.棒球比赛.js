/**
 * 682
 */

const calPoints = function(operations) {
    const pointStack = [];
    for (let opt of operations) {
        if (opt === "C") {
            pointStack.pop();
        } else if (opt === "+") {
            pointStack.push(pointStack[pointStack.length - 1] + pointStack[pointStack.length - 2]);
        } else if (opt === 'D') {
            pointStack.push(pointStack[pointStack.length - 1] * 2);
        } else {
            pointStack.push(parseInt(opt));
        }
    }
    return pointStack.reduce((prev, cur) => prev + cur, 0);
}


console.log(calPoints(["5","2","C","D","+"]));

