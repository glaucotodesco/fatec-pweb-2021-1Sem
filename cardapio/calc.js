let pratosCadastrados=[ 
        {nome:"Bife Acebolado", preco:12.0},
        {nome:"Peito de Frango Grelhado", preco:10.0},
        {nome:"Carne de Panela", preco:11.0}
];

let acompanhamentosCadastrados=[ 
    {nome:"Mini Salada", preco:5.5},
    {nome:"Maionese", preco:4.25},
    {nome:"Farofa", preco: 3.0},
    {nome:"Torresmo", preco: 6.0},
];



var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});



function calc(){

    let nome = document.getElementById("nome").value;
    if(nome === ""){
        alert('Nome precisa ser digitado');
    }
    else{
        let pratos = document.getElementsByName("prato_principal");
        let pratoEscolhido;
        let acompanhamentosEscolhidos = [];
        let precoFinal = 0;
    
        for(var ele of pratos) 
        {    
            if(ele.checked){
                pratoEscolhido = pratosCadastrados[ele.value];
                precoFinal     = pratosCadastrados[ele.value].preco;
            }
        }
    
        let acompanhamentos = document.getElementsByName("acompanhamento");
        for(var ele of acompanhamentos)
        {
            if(ele.checked){
                acompanhamentosEscolhidos.push(acompanhamentosCadastrados[ele.value])
                precoFinal     += acompanhamentosCadastrados[ele.value].preco;
            }
        }
    
        let saida = document.getElementById("saida");
    
        
        saida.innerHTML   = `<br><br>Caro <b>${nome}</b>`;
        saida.innerHTML  += `<br><br><br>Seu pedido está em preparação.`;
        saida.innerHTML  += `<br><br>`;
        saida.innerHTML  += `Você escolheu o prato principal: ${pratoEscolhido.nome} - ${formatter.format(pratoEscolhido.preco)}`;
        
        if(acompanhamentosEscolhidos.length > 0){
            saida.innerHTML  += `<br>Você escolheu de acompanhamentos:`;
            for(var ele of acompanhamentosEscolhidos)
              saida.innerHTML += `<br> ${ele.nome} - ${formatter.format(ele.preco)}`;
        }
    
        saida.innerHTML    += `<br><br><h3>Preço final ${formatter.format(precoFinal)} </h3>`;
     
        
    }
}