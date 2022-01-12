function estoqueProdutos (nome, peso, preço) {
    return {nome, peso, preço}
}

let produtos {
    arroz: estoqueProdutos ("arroz", 1, 4),
    feijao: estoqueProdutos ("feijão", 1, 3),
    massa: estoqueProdutos ("massa", 1, 2),
    açucar: estoqueProdutos ("açúcar", 1, 2),
}

let mercado = {
    desconto = 0.40
}

let cliente = {
    lucro = 0.40
}

mercado.estoque = 