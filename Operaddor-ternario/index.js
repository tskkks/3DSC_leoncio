// São usados para simplificar o processo de tomada de decisão e, eventualmente, substituir if/else

const idade = 18;
if (idade >= 18) {
  console.log("Entrada permitida");
} else {
  console.log("Proibido para menores");
}
// com operador tenário

const passe = idade >= 18 ? "Entrada permitida" : "Proibido para menores"
console.log(passe)