/**
 * 121.买卖股票的最佳时期
 */


// 一次遍历，记录当前遍历时的最低价格，以及当前价格卖出时的最大利润
const maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));