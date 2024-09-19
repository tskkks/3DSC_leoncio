// //MILISEGUNDOS
// let n = 0

// // setInterval(function() {
// //   console.log('Executou')
// // }, 5000)

// const intervalo = setInterval(function() {
//   console.clear()
//   console.log(n)
//   n++
// }, 1000)

// setTimeout(function() {
// clearInterval(intervalo)
// //redirecionar para outra pagina
  
// }, 5000)

// A PARTIR O CONCEITOS APRENDIDOS, REOLVA;
// A) Crie uma função setInterval que receba um afunção e um tempo de 3s.
// B) Dentro dela imprima um número randomico de 1 a 10.
// C) Após percorridos 8s interrompa com setTimeout.

const intervalo2 = setInterval(function(){
  let num = Math.random()*10
  console.log(num)
}, 3000)

// CRIAR UM SET TIMEOUT PARA PARAR O INTERVALO
setTimeout(function(){
  clearInterval(intervalo2)
  location.href = "https://www.shopee.com.br"
}, 8000)