/**
 * leetcode374.猜数字大小
 */

const guessNumber = function(n, k) {
    let left = 0, right = n
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid > k) {
            right = mid - 1
        } else if (mid < k) {
            left = mid + 1
        } else {
            return mid
        }
    }
}