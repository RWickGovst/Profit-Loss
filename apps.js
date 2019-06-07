
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];
var lowprice = 9;
var highprice = 0;


// Your Biggest Profit function
var biggestProfit = function() {

    for(var i=0;i<stockPrices.length-1;i++){
        if(stockPrices[i] < lowprice ) {
            lowprice = stockPrices[i];
        }
            for(var j=i+1;j<stockPrices.length;j++){
                if(stockPrices[j] > highprice ) {
                    highprice = stockPrices[j];
                }
        }
    }
    // console.log(highprice);
    // console.log(lowprice);
    var profit=((highprice-lowprice)*10000);
    // console.log(profit);
    // document.getElementById("profit").innerHTML = profit;
    $(".profit").append(profit);
};


// A Call to your Biggest Profit function.
biggestProfit();

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
