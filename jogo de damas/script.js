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


/*

function posicaoPeca (a, b, c, d) {

    let a = jogo.tabuleiro[0]

}
*/


function iniciarPartida (){
    console.table(jogo.tabuleiro);
}



let arr = jogo.tabuleiro;

function mexerPreta (arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);

    if (arr["p"] === true, arr["p"] != "#") {
        console.table(jogo.tabuleiro)
    }
}

function mexerBranca (arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);


    if (arr["b"] === true, arr["b"] != "#") {
        console.table(jogo.tabuleiro)
    } else {
        return 0;
    }
}





/*
if (arr["p"] === true, arr[""] != "#") {
    console.table(jogo.tabuleiro)
}
*/