/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-23 16:43:37
 * @LastEditTime: 2022-08-23 16:45:53
 * @FilePath: \young_leetcode\字符串\344.反转字符串.ts
 */

function reverseString(s: String[]): void {
    let length: number = s.length;
    let left: number = 0;
    let right: number = length - 1;
    let temp: String;

    while (left <= right) {
        temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left ++;
        right --;
    }
}

console.log(reverseString(['h','e','l','l','o']))