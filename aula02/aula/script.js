function ConverterBTC() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorReal = parseFloat(valor);
    var valorBTC = valorReal / 197635.74;
    valorBTC = valorBTC.toFixed(4);

    var elementoValorConvertido = document.getElementById("valorBitCoin");
    var valorConvertidoBTC = "Equivale à BTC " + valorBTC;
    elementoValorConvertido.innerHTML = valorConvertidoBTC;
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorReal = parseFloat(valor);
    var valorEuro = valorReal / 5.52;
    valorEuro = valorEuro.toFixed(2);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Euro é EUR " + valorEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
    ConverterBTC();
}

function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorReal = parseFloat(valor);
    var valorDolar = valorReal / 5.06;
    valorDolar = valorDolar.toFixed(2);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Dólar USD " + valorDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
    ConverterBTC();
}