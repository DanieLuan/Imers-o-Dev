function converter() {
    var temp = document.getElementById("temperaturaEntrada").value;
    var tempToConvert = document.getElementById("tempToConvert").value;
    var tempConvert = document.getElementById("tempConvert").value;
    
    resultElemnt = document.getElementById("result");

    temp = parseFloat(temp);
    tempToConvert = parseFloat(tempToConvert);
    tempConvert = parseFloat(tempConvert);
    
    if(tempToConvert == 1){
        if(tempConvert == 2){ //celsius to fahrenheit
            var fahrenheit = ((9/5) * temp) + 32;
            fahrenheit = fahrenheit.toFixed(2);

            resultElemnt.innerHTML = fahrenheit + " °F";
        }
        else if(tempConvert == 3){
            var kelvin = temp + 273;
            kelvin = kelvin.toFixed(2);

            resultElemnt.innerHTML = kelvin + " K";
        }
        else if(tempConvert == 1){
            resultElemnt.innerHTML = temp + " °C";
        }
    }
    else if(tempToConvert == 2){
        var celsius = (5/9) * (temp - 32);
        var kelvin = celsius + 273;

        if(tempConvert == 1){ //fahrenheit to celsius
            celsius = celsius.toFixed(2);
            resultElemnt.innerHTML = celsius + " °C";
        }
        else if(tempConvert == 3){  //fahrenheit to kelvin
            kelvin = kelvin.toFixed(2);
            resultElemnt.innerHTML = kelvin + " K";
        }
        else if(tempConvert == 2){
            resultElemnt.innerHTML = temp + " °F";
        }
    }
    else if(tempToConvert == 3){
        var celsius = temp - 273;

        if(tempConvert == 1){ //kelvin to celsius
            celsius = celsius.toFixed(2);
            resultElemnt.innerHTML = celsius + " °C";
        }
        else if(tempConvert == 3){  //kelvin to kelvin
            resultElemnt.innerHTML = temp + " K";
        }
        else if(tempConvert == 2){ //kelvin to fahrenheit
            var fahrenheit = ((9/5) * celsius) + 32;
            fahrenheit = fahrenheit.toFixed(2);
            resultElemnt.innerHTML = fahrenheit + " °F";
        }
    }
}