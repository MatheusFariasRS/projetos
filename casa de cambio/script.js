let dolar = 5.68;
let euro = 6.43;
let libra = 7.70;
let iene = 0.049;
let real = 1;

function comprarMoeda (moeda, quantidade) {
        return(quantidade / moeda * 0.10)
}

function venderMoedas (moeda, quantidade) {
    return (moeda * quantidade * 0.10);
}

function trocarMoeda (moeda, quantidade, moeda2) {
    if (moeda > 0) {
        continue;
    } else if (quantidade > 0) {
        return venderMoedas;
    }
}