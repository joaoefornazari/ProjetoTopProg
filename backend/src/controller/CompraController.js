const axios = require('axios');
const compra = require('../model/Compra');

module.exports = {

    async store(req, res){

        const { compraId } = req.body;

        const compraExists = await Compra.findOne({ id: compraId });

        if(compraExists){
            return res.json(compraExists);
        }

        const response = await axios.get(`???`);

        const { compraId, carrinhoId, produtoList } = response.data;

        const compra = await Compra.create({

            id: compraId,
            carrinhoId,
            produtoList
        });

        console.log(response.data);

        //por conta do axios ser assíncrono, temos que informar nosso Controller que
        // o axios deve ser aguardado e que o store é um processo assíncrono, por isso
        // o await e o async.

        return res.json(compra);
    }
    
}