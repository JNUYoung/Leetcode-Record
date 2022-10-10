/**
 * 防御式编程思想：在 flowerbed 数组两端各增加一个 0， 这样处理的好处在于不用考虑边界条件，任意位置处只要连续出现三个 0 就可以栽上一棵花。
 */


var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.push(0);
    flowerbed.unshift(0);

    const flowerbedLength = flowerbed.length;
    let count = 0;

    for (let i = 1; i < flowerbedLength - 1; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            count += 1;
        }
    }
    return count >= n;
};


console.log(canPlaceFlowers([1,0,0,0,1], 1));
