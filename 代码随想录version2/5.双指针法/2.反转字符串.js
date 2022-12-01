const reverseString = function(s) {
    s = s.split('')
    let left = 0, right = s.length
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s.join('')
}

console.log(reverseString('hello world'))