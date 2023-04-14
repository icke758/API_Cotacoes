var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", requestOptions)
.then(result => result.json())
.then(result => {

    console.log(result)

    /*BTC */
    const cotacao = document.getElementById("code");
    const name = document.getElementById("name");
    const change = document.getElementById("change");

    cotacao.innerHTML = result['BTCBRL']['code'];
    name.innerHTML = result['BTCBRL']['name'];
    change.innerHTML = result['BTCBRL']['pctChange'];

    /*Real brasileiro */

    
})
.catch(error => console.log('error', error));

