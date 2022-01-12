function estoqueProdutos (nome, peso, preço) {
    return {nome, peso, preço};
}

let produtos = {
    arroz: estoqueProdutos ("Arroz", 1, 4),
    feijao: estoqueProdutos ("feijão", 1, 3),
    massa: estoqueProdutos ("Massa", 1, 2),
    açucar: estoqueProdutos ("Açúcar", 1, 2),
}

let mercado = {
    desconto: 0.10,
    desconto2: 0.0
}


let cliente = {
    lucro: 0.40
}

mercado.comprarEstoque = function (produto, quantidade) {
    if (quantidade >= 100) {
        let valorDesconto = produto.preço - (produto.preço * this.desconto);
    return valorDesconto * quantidade;
    }
     else if (quantidade < 100) {
         let valorDesconto2 = produto.preço -  this.desconto2;
    return valorDesconto2 * quantidade;
    }
}

cliente.venderEstoque = function (produto, quantidade) {
    let valorlucro = produto.preço * (1 + this.lucro);
    return valorlucro * quantidade;
}

mercado.criarTabela = function (produto) {
    let tabela = [];

    for (let moeda in moedas){
        tabela.push ({
            "Produtos": produtos[produto].nome + ' (' + produtos[produto].sigla + ') ',
            "Valor de estoque": this.comprarEstoque(produtos[produto, 1]),
            "Valor de venda": this.venderEstoque(produtos[produto, 1])
        })
    }
}