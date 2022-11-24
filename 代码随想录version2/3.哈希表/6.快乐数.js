// 在循环的过程中，判断在sum到达1之前是否出现了重复的sum
// 因为一旦出现了重复的sum，那么往后必然形成固定的循环

const isHappy = function(n) {
    function getSum(n) {
        let resSum = 0
        while (n) {
            resSum += (n % 10) ** 2
            n  = Math.floor(n / 10)
        }
        return resSum
    }

    const m = new Map()
    
    while (true) {
        if (m.has(n)) {
            return false
        } else {
            m.set(n, 1)
        }
        if (n === 1) {
            return true
        }
        n = getSum(n)
    }
}

console.log(isHappy(19))