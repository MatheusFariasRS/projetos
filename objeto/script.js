
/*
let aluno = {nome: "Matheus", nota: [10, 9]};

console.log(aluno.nome)
console.log(aluno["nome"])
console.log(aluno.nota)
console.log(aluno["nota"])
console.log(aluno)

console.log(aluno.nota[0]);
console.log(aluno.nota[1]);

console.log(aluno["nota"][0]);


// inserir propriedade em um objeto 


aluno.matricula = 454111;


aluno["sobrenome"] = ["Farias"];


console.log(aluno)
*/

/*

let aluno = {nome: "Matheus",
             notas: [9, 10, 9],
             media: function (n1, n2, n3) {
                 return (n1 + n2+ n3) / 3;
             }

}

let aluno1 = {nome: "Alessandra",
             notas: [7, 10, 9],
             media: function (n1, n2, n3) {
                 return (n1 + n2+ n3) / 3;
             }

}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1], aluno1.notas[2]));

console.log(aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
*/


// a função a baixo só funciona quando esta atribuida a uma propriedade de um objeto e se transformando no m
// metodo desse objeto.

/*
function calcMedia () {
    return (this.notas[0] + this.notas[1] + this.notas[2]) /3;
}

let aluno = {nome: "Matheus",
             notas: [9, 10, 9],
             media: calcMedia

}

let aluno1 = {nome: "Alessandra",
             notas: [10, 10, 9],
             media: calcMedia

}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));
console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1], aluno1.notas[2]));

*/




/*
function calcMedia () {
    return (this.nota1 + this.nota2) / 2; 
}

let turma = [
    {
        nome: "Matheus",
        nota1:10,
        nota2: 9.5,
        media: calcMedia
    },
    {
        nome: "LeleMele",
        nota1:8,
        nota2: 9,
        media: calcMedia
    }
]


let aluno = turma[1];
console.log(aluno);
console.log(aluno.media())
*/

/*

function criarAluno (nome, n1, n2) {
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function calcMedia () {
            return (this.nota1 + this.nota2) / 2; 
        }
    }
}

let turma = [
         criarAluno("Matheus", 10, 9),
         criarAluno("LeleMele", 9, 8),
         criarAluno("aluno3", 2, 1)
]

let aluno = turma[1];
 

for (let aluno of turma){ 

    console.table(aluno.nome + " - " + aluno.media());
}
*/




/*
turma.forEach (function (elemento){
    console.table(aluno.nome + " - " + aluno.media())
})
*/


/*

function aluno(nome, n1, n2) {

      this.nome = nome;
      this.nota1 = n1;
      this.nota2 = n2;
      this. media = function () {
          return (this.nota1 + this.nota2) / 2;
      }
}

let recebeObjeto = new aluno ("LeleMele", 10, 10);


console.log(recebeObjeto.media())

*/