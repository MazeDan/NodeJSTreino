const http = require("http"); // Requirindo o http

http
    .createServer((request,response) => {
        //O que o servidor vai fazer
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify({
            mensage: "Minha Primeira Aplicação com NODEJS"
        }));
    })
    .listen (4001,() => console.log("O Servidor está rodando na porta 4001"));

