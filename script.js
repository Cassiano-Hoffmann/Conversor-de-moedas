const convertButton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select1") // converter de
const currencySelect2 = document.querySelector(".currency-select2") // converter para

const realDolar = 0.20
const realEuro = 0.19
const realLibra = 0.16
const realBitcoin = 0.0000047
const dolarEuro = 0.93
const dolarLibra = 0.79
const dolarBitcoin = 0.000023
const euroLibra = 0.85
const euroBitcoin = 0.000025
const libraBitcoin = 0.000029

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Valor
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Primeiro valor p
    const currencyValueConverted = document.querySelector(".currency-value") // Segundo valor p

    if (currencySelect1.value == "real") {
        if (currencySelect2.value == "dolar") {
            taxa = 0.20 // taxa de real para dolar
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * realDolar)
        } else if (currencySelect2.value == "euro") {
            taxa = 0.19 // taxa de real para euro
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * realEuro)
        } else if (currencySelect2.value == "libra") {
            taxa = 0.16 // taxa de real para libra
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * realLibra)
        } else if (currencySelect2.value == "bitcoin") {
            taxa = 0.0000047 // taxa de real para bitcoin
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * realBitcoin)
        } else {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * 1)
        }
    } else if (currencySelect1.value == "dolar") { 
        if (currencySelect2.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realDolar) // dolar para real
        } else if (currencySelect2.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolarEuro)
        } else if (currencySelect2.value == "libra") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * dolarLibra)
        } else if (currencySelect2.value == "bitcoin") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * dolarBitcoin)
        } else {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * 1)
        }
    } else if (currencySelect1.value == "euro") { 
        if (currencySelect2.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realEuro)
        } else if (currencySelect2.value == "dolar") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarEuro)
        } else if (currencySelect2.value == "libra") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * euroLibra)
        } else if (currencySelect2.value == "bitcoin") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * euroBitcoin)
        } else {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * 1)
        }
    } else if (currencySelect1.value == "libra") { 
        if (currencySelect2.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realLibra)
        } else if (currencySelect2.value == "dolar") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarLibra)
        } else if (currencySelect2.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroLibra)
        } else if (currencySelect2.value == "bitcoin") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * libraBitcoin)
        } else {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * 1)
        }
    } else if (currencySelect1.value == "bitcoin") { 
        if (currencySelect2.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realBitcoin)
        } else if (currencySelect2.value == "dolar") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarBitcoin)
        } else if (currencySelect2.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroBitcoin)
        } else if (currencySelect2.value == "libra") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraBitcoin)
        } else {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue * 1)
        }
    }

}

function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")

    if (currencySelect1.value == "real") {
        currencyName1.innerHTML = "Real"
        currencyImage1.src = "./assets/real.svg"
    }

    if (currencySelect1.value == "dolar") {
        currencyName1.innerHTML = "Dólar americano"
        currencyImage1.src = "./assets/dolar.svg"
    }

    if (currencySelect1.value == "euro") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.svg"
    }

    if (currencySelect1.value == "libra") {
        currencyName1.innerHTML = "Libra esterlina"
        currencyImage1.src = "./assets/libra.svg"
    }

    if (currencySelect1.value == "bitcoin") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImage1.src = "./assets/bitcoin.svg"
    }

    convertValues()
}

function changeCurrency2() {
    const currencyName2 = document.getElementById("currency-name2")
    const currencyImage2 = document.querySelector(".currency-img2")

    if (currencySelect2.value == "real") {
        currencyName2.innerHTML = "Real"
        currencyImage2.src = "./assets/real.svg"
    }

    if (currencySelect2.value == "dolar") {
        currencyName2.innerHTML = "Dólar americano"
        currencyImage2.src = "./assets/dolar.svg"
    }

    if (currencySelect2.value == "euro") {
        currencyName2.innerHTML = "Euro"
        currencyImage2.src = "./assets/euro.svg"
    }

    if (currencySelect2.value == "libra") {
        currencyName2.innerHTML = "Libra esterlina"
        currencyImage2.src = "./assets/libra.svg"
    }

    if (currencySelect2.value == "bitcoin") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImage2.src = "./assets/bitcoin.svg"
    }

    convertValues()
}

currencySelect1.addEventListener("change", changeCurrency1)
convertButton.addEventListener("click", convertValues)

currencySelect2.addEventListener("change", changeCurrency2)