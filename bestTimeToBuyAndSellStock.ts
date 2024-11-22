function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let currPrice = prices[i];
    if (currPrice < minPrice) {
      minPrice = currPrice;
    }
    if (currPrice - minPrice > maxProfit) {
      maxProfit = currPrice - minPrice;
    }
  }
  return maxProfit;
}
