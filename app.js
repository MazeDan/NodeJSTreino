const { request } = require('express');
const express = require('express');
const {randomUUID} = require('crypto'); //CRIANDO UM ID UNIVERSAL

const app = express();

app.use(express.json()); //FAZENDO LER JSON

const produtos = [];
/**
 * POST = INSERE UM DADO NA TABELA
 * GET = BUSCA UM DADO NA TABELA
 * PUT = EDITA UM DADO NA TABELA
 * DELETE = DELETA UM DADO NA TABELA
 */

/**
 * T I P O S  D E  R E C E B I M E N T O S
 * body = Sempre que quiser enviar dados pra a aplicação
 * params = /produts/25156415615156
 * query = /produts?id=156156165156165
 */

//INSERINDO
app.post("/products",(request,response) =>{

    const {name, price} = request.body;

    const product = {
        name, 
        price,
        id: randomUUID(),
    };
    produtos.push(product);

    return response.json(product);
});

//VISUALIZANDO
app.get('/products',(request,response) => {
    return response.json(products);
});
app.listen(4002,() => console.log("Servidor está rodando na porta 4002"));
