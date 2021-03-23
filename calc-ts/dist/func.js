"use strict";
function soma() {
    var num1, num2, soma;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    soma = num1 + num2;
    document.getElementById("resp").value = String(soma);
    document.getElementById("hist").innerHTML += "<div class=\"alert alert-primary\">  " + num1 + " + " + num2 + " =  " + soma + " </div>";
}
