let jogo = {
    pecas: {
        brancas: 12,
        pertas: 12
    },
    tabuleiro: [
        ['p', '#', 'p', '#', 'p', '#', 'p', ' '],
        ['#', 'p', '#', 'p', '#', 'p', '#', 'p'],
        ['p', '#', 'p', '#', 'p', '#', 'p', '#'],
        ['#', ' ', '#', ' ', '#', ' ', '#', ' '],
        [' ', '#', ' ', '#', ' ', '#', ' ', '#'],
        ['#', 'b', '#', 'b', '#', 'b', '#', 'b'],
        ['b', '#', 'b', '#', 'b', '#', 'b', '#'],
        ['#', 'b', '#', 'b', '#', 'b', '#', 'b']]
};

// INICIAR PARTIDA

function iniciarPartida (){
    console.table(jogo.tabuleiro);
}

let novoJogo = "Iniciar partida?"



function mostrarTabuleiro () {
    if (confirm(novoJogo) === true) {
        console.table(jogo.tabuleiro);
    }    
    else if (novoJogo !== true) {
        console.log ("Até a próximo partida!");
    }
}

mostrarTabuleiro();

// INICIAR PARTIDA ACIMA.




let arr = jogo.tabuleiro;

function mexerPreta (arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);

    if (arr["p"] === true, arr["p"] != "#") {
        console.table(jogo.tabuleiro)
    }
}

mexerPreta();
