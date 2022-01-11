let dolar = 5.68;
let euro = 6.43;
let libra = 7.70;
let iene = 0.049;


function venderMoeda (quantidade, moeda) {
     // cliente vende pra casa
    let vender = quantidade / moeda;
    let taxa = 0.10;
    let total = vender * taxa;

    if (quantidade / moeda > 0)
     {
        console.log("O valor da taxa é: " + (vender * taxa) + " Valor a pagar: " + Math.floor(vender + total));
    }
}
        
    
 function comprarMoeda (quantidade, moeda){
    // casa compra do cliente
     let comprar = quantidade / moeda;
     let taxa = 0.10;
     let total = comprar * taxa;

     if (quantidade / moeda > 0)
      {
         console.log("O valor da taxa é: " + (comprar * taxa) + " Valor a pagar " + Math.floor(comprar - total))
     }

    }
 

function trocarMoeda (moeda, quantidade , moeda2) {
    
    let comprar = quantidade * moeda;
    let taxaCompra = 0.10;
    let totalCompra = comprar * taxaCompra;

    let vender = comprar - totalCompra;
    let taxaVenda = 0.10;
    let totalVenda = vender * taxaVenda;
    let moeda2Venda = totalVenda - vender;

    if (quantidade / moeda > 0) {
           console.log("A taxa de compra é: " + (comprar * taxaCompra) + " Valor a receber: " + (comprar - totalCompra)  + " A taxa de venda é de: " + (vender * taxaVenda) + " Valor a receber: " + +moeda2Venda)
    } 
}