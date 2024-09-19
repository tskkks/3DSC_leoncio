// // DECLARAR FUNÇÕES
// function imprimeOla(){
//   console.log("Olá")
// }
// function olaPessoa(nome){
//   console.log("Olá" + nome)
// }

// //SET INTERVAL
// setInterval(function(){
// salario = salario + 100;
//   console.clear()
// console.log (`Salário: R$${salario}, 00`)
// }, 2000);

//CRIE UMA FUNÇÃO QUE RETORNE UM OBJETO JS
//EXECUTE ESTA FUNÇÃO A CADA 1S ATRAVES DE UMA
//FUNÇÃO SET INTERVAL()

let numero = 1;

function imprimeNumero() {
  console.log("numero");
}

function seuNumero(numero) {
  console.log("numero" + numero);
}

setInterval(function () {
  console.clear();
  numero = numero + 1;
  console.log(`numero: ${numero}`);
}, 1000);

// // INVOCAR FUNÇÃO
// imprimeOla()
// olaPessoa("Gabriel")
// olaPessoa("Ana")










/**
 * SET TIME OUT / SET INTERVAL
 * função nativa que recebe argumentos
 * controla dados a partir de um intervalo
 * */

const intervalo1 = setInterval(function () {
  console.log("Olá");
}, 200);

//LIMPAR
clearInterval(intervalo1);
const timeOut1 = setTimeout(function () {
  console.log("Olá");
}, 200)

  //LIMPAR INTERVALO
  clearTimeout(timeOut1)

//ESTRUTURA DE DADOS
//ARRAY -> ESTRUTURA DE DADOS INDEXADA

const nomes = ["Gabriel", "Ana", "João"];
nomes[2]; //João nome [33] // undefined

// OBJETOS LITERAIS -> ESTRUTURA CHAVE / VALOR

const cachorro =(
  patas: 4,
  cor: "caramelo",
  raca: "vira-lata",
  castrado: false,
);

console.log(cachorro);
console.log(cachorro.cor);

Object.keys(cachorro);
Object.values(cachorro);

//FUNÇÕES -> ESTRUTURA DE DADOS
