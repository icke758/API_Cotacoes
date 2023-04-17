const root = document.querySelector("#root")
// const valor = document.getElementById('textbox_id').value 
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getVal() {
    let val = document.querySelector('input').value;
    console.log(val)
    return val
}
function displayCotation(data) {
    const cotation = document.createElement("p")
    const name = document.createElement("p")
    const change = document.createElement("p")
    const venda = document.createElement("p")
    const msg = document.createTextNode("R$1,00 em" + ` ${data.code} ` + "vale:");

    cotation.innerHTML = data.codein;
    name.innerHTML = data.name + `(${data.code})`;
    change.innerHTML = data.pctChange;
    venda.innerHTML = "R$ " + data.ask;

    root.appendChild(cotation)
    root.appendChild(name)
    root.appendChild(change)
    root.appendChild(msg)
    root.appendChild(venda)
    root.appendChild(document.createTextNode(getVal()))
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

}



function getBTCCotation(){
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", requestOptions)
    .then(result => result.json())
    .then(processResponse)
    .catch(console.error);
}

getBTCCotation()
getVal()
