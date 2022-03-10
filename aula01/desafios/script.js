function calcularMedia() {
    console.log("Clicou mané");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");

    var num1Value = num1.value;
    var num2Value = num2.value;
    var num3Value = num3.value;
    var num4Value = num4.value;

    var num1Float = parseFloat(num1Value);
    var num2Float = parseFloat(num2Value);
    var num3Float = parseFloat(num3Value);
    var num4Float = parseFloat(num4Value);

    var media = (num1Float + num2Float + num3Float + num4Float) / 4;

    var mediaElement = document.getElementById("resultado");

    var mediaElementPrint = " = " + media;
    
    mediaElement.innerHTML = mediaElementPrint;
}