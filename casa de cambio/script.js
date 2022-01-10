let dolar = 5.68;
let euro = 6.43;
let libra = 7.70;
let iene = 0.049;
let real = 1;

function venderMoeda (quantidade, moeda) {
     
    let vender = quantidade / moeda;
    let taxa = 0.10;
    let total = vender * taxa;

    if (quantidade / moeda > 0)
     {
        console.log("O valor da taxa é: " + Math.floor(vender * taxa) + " Valor a pagar: " + Math.floor(vender + total));
    }
}
        
    
 function comprarMoeda (quantidade, moeda){
    
     let comprar = quantidade / moeda;
     let taxa = 0.10;
     let total = comprar * taxa;

     if (quantidade / moeda > 0)
      {
         console.log("O valor da taxa é: " + Math.floor(comprar * 0.10) + " Valor a pagar " + Math.floor(comprar - total))
     }

    }
 

