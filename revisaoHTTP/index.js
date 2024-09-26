const http = require("http"); //importar http
const port = 8000; //porta do servidor
//criando o servidor
const servidor = http.createServer((req, res) =>{
 // console.log(req.url, req.method);
if (req.url === "/") {
  res.writeHead(404, {"Content-Type": "text/html"});
  res.write("<h1>Olá, home page!</h1>");
  res.end();
} else if (req.url === "/sobre") {
  res.writeHead(404, {"Content-Type": "text/html"});
  res.write("<h1>Saiba mais...</h1>");
  res.end();
}
});
//iniciando o servidor na porta 8000
servidor.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})