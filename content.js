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
    fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions)
  .then(response => response.json())
  .then(result => {
    const currencyCodes = Object.keys(result.symbols);
  

    // Loop through the currency codes and add them as options to the dropdown
    for (const currencyCode of currencyCodes) {
      const option = document.createElement('option');
      option.value = currencyCode;
      option.text = currencyCode ;
      fromCurencySelect.appendChild(option);
      const option2 = document.createElement('option');
      option2.value = currencyCode;
      option2.text = currencyCode;
    
      toCurencySelect.appendChild(option2);
    }
  })
  .catch(error => console.log('error', error));

    

    
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

