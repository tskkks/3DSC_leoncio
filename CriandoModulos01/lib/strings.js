const meuNome = "Gabriel";

function imprimeNome() {
  console.log(`Meu nome é ${meuNome}`);
}

//exportação imediata
export function caixaAlta(nome) {
  return nome.toUpperCase();
}

//exportação imediata
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}

//exportação default (padrão)
function separarPorHifen(nome) {
  return nome.split(" ").join("-");
}
export default separarPorHifen;

//exportação posterior de valores
export {meuNome, imprimeNome }