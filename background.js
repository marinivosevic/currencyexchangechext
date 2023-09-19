var myHeaders = new Headers();
myHeaders.append("apikey", "K1a0ojF8Sdlw207cFUGUn47BtTQzjHnW");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

