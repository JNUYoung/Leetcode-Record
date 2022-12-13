/**
 * leetcode131.分割回文串
 * 
 * 给定一个字符串s，将s分割成一些子串，使得每个子串都是回文串
 * 
 * s = 'aab'
 * return: [['a','a','b], ['aa', 'b]]
 */


const partition = function(s) {
    function isPalindrome(s) {
        let l = 0, r = s.length - 1
        while (l++ < r--) {
            if (s[l] !== s[r]) {
                return false
            }
        }
        return true
    }

    const result = []
    const path = []

    function backtracking(s, startIndex) {
        if (startIndex >= s.length) {
            result.push([...path])
            return
        }

        for (let i = startIndex; i < s.length; i++) {
            if (!isPalindrome(s.slice(startIndex, i + 1))) continue
            path.push(s.slice(startIndex, i + 1))
            backtracking(s, i + 1)
            path.pop()
        }
    }
    backtracking(s, 0)
    return result
}

console.log(partition("aab"))