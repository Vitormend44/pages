const botao = document.querySelector(".botao")
const currencySelect = document.querySelector(".select-se")

function converterValores(){
  
    const pegarValorNoInput = document.querySelector(".input-valor").value
    const valorEmReal = document.querySelector(".valor-convertido")
    const valorAserConvertido = document.querySelector(".valor-convertido-2")

    const dolarDoDia = 5.2
    const euroDoDia = 6.2
    const bitcoinDoDia = 7.2
    const libraDoDia = 8.2


    if(currencySelect.value == "dolar"){
        valorAserConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(pegarValorNoInput / dolarDoDia)
    }

    if(currencySelect.value == "euro"){
        valorAserConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(pegarValorNoInput / euroDoDia)
    }

    if(currencySelect.value == "bitcoin"){
    valorAserConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "XBT"
    }).format(pegarValorNoInput / bitcoinDoDia)
    }

    if(currencySelect.value == "libra"){
    valorAserConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(pegarValorNoInput / libraDoDia)
    }

   

    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(pegarValorNoInput)




}

function changeCurrency(){
    const currencyName = document.querySelector(".currency")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar"  
    currencyImg.src = "./img/dolar.png" 
    }
    
    if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"  
    currencyImg.src = "./img/euro.png" 
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin 1.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./img/libra 1.png"
    }

    converterValores()
}


currencySelect.addEventListener("change", changeCurrency)
botao.addEventListener("click", converterValores)











































