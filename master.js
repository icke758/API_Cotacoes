const root = document.querySelector("#root")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function displayCotation(data) {
    const cotation = document.createElement("p")
    const name = document.createElement("p")
    const change = document.createElement("p")

    cotation.innerHTML = data.pctChange;
    name.innerHTML = data.name + `(${data.code})`;
    change.innerHTML = data.pctChange;

    root.appendChild(cotation)
    root.appendChild(name)
    root.appendChild(change)
    root.appendChild(document.createElement("hr"))
}

function processResponse(data) {
    console.log(data)

    const BTC = data.BTCBRL;
    const EUR = data.EURBRL;
    const USD = data.USDBRL;

    displayCotation(BTC)
    displayCotation(EUR)
    displayCotation(USD)

    // const BRL = result.B
    // /*BTC */
    // const cotacao = document.getElementById("code");
    // const name = document.getElementById("name");
    // const change = document.getElementById("change");

    // cotacao.innerHTML = result['BTCBRL']['code'];
    // name.innerHTML = result['BTCBRL']['name'];
    // change.innerHTML = result['BTCBRL']['pctChange'];

    /*Real brasileiro */
}



function getBTCCotation(){
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", requestOptions)
    .then(result => result.json())
    .then(processResponse)
    .catch(console.error);
}

getBTCCotation()
