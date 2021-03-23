function soma() {
    let num1, num2, soma : number;

    num1 = parseFloat(( <HTMLInputElement> document.getElementById("num1")).value);
    num2 = parseFloat(( <HTMLInputElement> document.getElementById("num2")).value);

    soma = num1 + num2;

    (<HTMLInputElement> document.getElementById("resp")).value = String(soma);
    document.getElementById("hist")!.innerHTML += `<div class="alert alert-primary">  ${num1} + ${num2} =  ${soma} </div>`;
}