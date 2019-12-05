const express = require('express'); //cria um novo servidor e a função express com aquela 
//parada de domínio de dependências etc
const mongoose = require('mongoose'); // tradutor de JS para sintaxe BD, TEM Q VIR ANTES DAS ROTAS
const routes = require('./routes');

const server = express(); //também cria um servidor (?)

//veja se o IP empresarial possui restrições

//antes de informar o server do JSON, precisamos importar o mongoDB
//omnistack:omnistack = username e senha cadastrados no MongoDB
//().net)/omnistack8 = nome do DB

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-izhfn.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//antes das rotas, precisamos informar o server que os dados serão recebidos em JSON

server.use(express.json());

server.use(routes); //use = usando configurações de outro arquivo
//diretório raiz do nosso servidor

server.listen(3333);

if(server.enabled){

    console.log("OK");
}
//rota de exibição do servidor no browser. Tipo o endereço de casa, e o browser vai exibir o que tem aí

// dá pra usar qualquer banco de dados no node. Mas o Diego Rocketseat usa MongoDB
// MongoDB = não recomendado paran relações complexas
// recomendação do Diego = use BDs relacionais website IDE = MongoDB Atlas

//importamos o Mongoose (tradutor de JS p/ sintaxe de BD) aqui no server