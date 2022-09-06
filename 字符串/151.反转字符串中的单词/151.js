// let s = "a good   example"

// let s_arr = s.split(" ");
// s_arr = s_arr.filter(x=>x);

// console.log(s_arr);


const reverseWords = function(s) {
    let s_arr = s.split(" ");
    s_arr.filter(x => x);

    let left = 0;
    let right = s_arr.length - 1;

    while (left < right) {
        [s_arr[left], s_arr[right]] = [s_arr[right], s_arr[left]];
        left++;
        right--;
    }

    return s_arr.join(" ");
}


/**
 * 1.双指针方法去除多余的空格，
 *      1.1 字符串起始的空格；
 *      1.2 字符串中连续的空格（仅保留一个）
 *      1.3 字符串末尾的空格
 * 2.将整个字符串进行反转；
 * 3.将每个单词进行反转；（以空格为间隔的判断）
 */

const removeExtraSpace = function(strArr) {
    let slow = 0, fast = 0;

    while (fast  < strArr.length) {
        if (strArr[fast] === " " && (fast === 0 || strArr[fast - 1] === " ")) {
            fast++;
        } else {
            strArr[slow++] = strArr[fast++];
        }
    }

    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow;
}