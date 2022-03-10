function celsius() {
    var temp = document.getElementById("temperaturaEntrada");
    var celsiusTemp = temp.value;
    var celsiusTempFloat = parseFloat(celsiusTemp);

    var fahrenheit = ((9/5) * celsiusTempFloat) + 32;
    fahrenheit = fahrenheit.toFixed(2);

    var kelvin = celsiusTempFloat + 273;
    kelvin = kelvin.toFixed(2);

    var elementoTemp1 = document.getElementById("tempConvert1");
    var elementoTemp2 = document.getElementById("tempConvert2");
    var tempConvert1 = fahrenheit + " F°";
    var tempConvert2 = kelvin + " K";
    elementoTemp1.innerHTML = tempConvert1;
    elementoTemp2.innerHTML = tempConvert2;
}

function fahrenheit() {
    var temp = document.getElementById("temperaturaEntrada");
    var fahrenheitTemp = temp.value;
    var fahrenheitTempFloat = parseFloat(fahrenheitTemp);

    var celsius = (5/9) * (fahrenheitTempFloat - 32);
    var kelvin = celsius + 273;

    celsius = celsius.toFixed(2);
    kelvin = kelvin.toFixed(2);

    var elementoTemp1 = document.getElementById("tempConvert1");
    var elementoTemp2 = document.getElementById("tempConvert2");
    var tempConvert1 = celsius + " C°";
    var tempConvert2 = kelvin + " K";
    elementoTemp1.innerHTML = tempConvert1;
    elementoTemp2.innerHTML = tempConvert2;
}

function kelvin() {
    var temp = document.getElementById("temperaturaEntrada");
    var kelvinTemp = temp.value;
    var kelvinTempFloat = parseFloat(kelvinTemp);

    var celsius = kelvinTempFloat - 273;
    var fahrenheit = ((9/5) * celsius) + 32;

    fahrenheit = fahrenheit.toFixed(2);
    celsius = celsius.toFixed(2);
    
    var elementoTemp1 = document.getElementById("tempConvert1");
    var elementoTemp2 = document.getElementById("tempConvert2");
    var tempConvert1 = celsius + " C°";
    var tempConvert2 = fahrenheit + " F°";
    elementoTemp1.innerHTML = tempConvert1;
    elementoTemp2.innerHTML = tempConvert2;
}