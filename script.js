let initialPrice = document.querySelector('#initial-price');
let currentPrice = document.querySelector('#current-price');
let numberOfStocks = document.querySelector("#number-of-stocks");
let button = document.querySelector("button");
let output = document.querySelector("#output")
button.addEventListener('click',submitHandler);

function submitHandler () {
    let initialPriceValue = initialPrice.value;
    let currentPriceValue = currentPrice.value;
    let numberOfStocksValue = numberOfStocks.value;

    if(initialPrice && currentPriceValue && numberOfStocks) {
        calculateProfitAndLoss(initialPriceValue,currentPriceValue,numberOfStocksValue)
    }else {
        alert('please fill all the fields')
    }

}


function calculateProfitAndLoss(initialPrice,currentPrice,numberOfStocks) {
    // condition for loss
    if(initialPrice > currentPrice){
        let loss = (initialPrice -currentPrice) * numberOfStocks;
        let lossPercentage = (loss/initialPrice) *100;
        showOutput(`Hey, the loss is ${loss} and the percent is ${lossPercentage}`);
        // console.log("loss%",lossPercentage)

        // condition for profit
    }else if(currentPrice >initialPrice) {
        let profit = (currentPrice - initialPrice) *numberOfStocks;
        let profitPercentage = (profit/initialPrice) *100
        showOutput(`Hey, the profit is ${profit} and the percent is ${profitPercentage}`);
        // console.log("profit%",profitPercentage)
    } else {
        showOutput("no pain no gain, no gain no pain")
    }

}

function showOutput(message) {
    output.innerHTML = message
}



