/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-17 16:40:28
 * @LastEditTime: 2022-08-17 16:42:43
 * @FilePath: \young_leetcode\数组\4.移除元素\27.ts
 */


function removeElements(nums: number[], val: number): number {
    let slowIndex: number = 0, fastIndex: number = 0;
    while (fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
        fastIndex++;
    }
    return slowIndex;
};
