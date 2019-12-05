const axios = require('axios');
const carrinho = require('../models/Carrinho');

module.exports = {

    async store(req, res){

        const { carrinhoId } = req.body;

        const carrinhoExists = await Carrinho.findOne({ id: carrinhoId });

        if(carrinhoExists){
            return res.json(carrinhoExists);
        }

        const response = await axios.get(`???`);

        const { carrinhoId, produtos, total_preco, forma_pgto } = response.data;

        const carrinho = await Carrinho.create({

            id: carrinhoId,
            produtos,
            total_preco,
            forma_pgto,
        });

        console.log(response.data);

        //por conta do axios ser assíncrono, temos que informar nosso Controller que
        // o axios deve ser aguardado e que o store é um processo assíncrono, por isso
        // o await e o async.

        return res.json(carrinho);
    }
    
}