const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
//importações sempre acima de qualquer outra coisa (costume de #include)

const routes = express.Router(); //crio um negócio que mexe com as rotas (?)


//declaracao abaixo tem todos os metodos HTTP
// GET, POST, PUT, DELETE
//aqui embaixo, eu criei uma rota SERVER
//PUT edita

//POST cria

//req = requisicao = info do que o user quer
	//res = resposta

// esse res.json tava no server.js antes, mas agora está aqui. Pensando orientado a objetos,
// estamos aplicando o conceito de delegação, hehe.

/*routes.get('/', (req, res) => {
    //return res.send('Hello World'); = exibir texto
	//req.query.name = variavel que a gente passa por parametro na URL
	//return res.send(`Hello ${req.query.name}`);

	//json é o banco de dados do JavaScript. Aparentemente é mais simples de trabalhar
	return res.json({ message: `Opa ${req.query.name}` });
});*/

routes.post('/products', DevController.store);

/*routes.post('/products/:devId/likes', LikeController.store); // importando os controllers*/

/*routes.post('/devs', (req, res) => {

	console.log(req.body); //para pegar dados informados pelo Insomnia no corpo JSON
    return res.json({ ok: true });

});*/

//Informações de dados do tipo POST = sempre mande elas pelo corpo do JSON (insomnia)
//aspas duplas antes de todo texto, e lembre-se de que JSON é tipo um BD

module.exports = routes;