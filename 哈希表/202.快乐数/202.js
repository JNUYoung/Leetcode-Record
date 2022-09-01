var isHappy = function(n) {
    const calc_happy = function(num) {
        let _num = num;
        let sum = 0;
        while (_num > 0) {
            sum += (_num % 10) * (_num % 10);
            _num = parseInt(sum / 10);
        }
        return sum;
    }

    const map = new Map();
    let temp = n;
    while (true) {
        if (map.has(n)) return false;
        if (n === 1) return true;
        map.set(n, 1);
        n = calc_happy(n);
}
}

console.log(isHappy(19))