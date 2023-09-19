var myHeaders = new Headers();
myHeaders.append("apikey", "K1a0ojF8Sdlw207cFUGUn47BtTQzjHnW");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
var fromCurency;
var toCurency;

document.addEventListener("DOMContentLoaded", function () {
    var fromCurencySelect = document.getElementById("dropdown");
    var toCurencySelect = document.getElementById("dropdownTo");
    var inputAmountElement = document.getElementById("fromCur");
    var outputAmountElement = document.getElementById("toCur");

    var fromCurency;
    var toCurency;
    let inputAmount;

    inputAmountElement.addEventListener("change", function() {
        inputAmount = inputAmountElement.value;
    })

    if (fromCurencySelect) {
        
        fromCurencySelect.addEventListener("change", function () {
            fromCurency = this.value;
            console.log(fromCurency);
        });
    }
    if (toCurencySelect) {
        
        toCurencySelect.addEventListener("change", function () {
            toCurency = this.value
            console.log(toCurency);
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurency}&from=${fromCurency}&amount=${inputAmount}`, requestOptions)
            .then(response => response.json())
            .then(result =>
                outputAmountElement.value = result.result
            )
            .catch(error => console.log('error', error));
            
        });
    }
    
});

