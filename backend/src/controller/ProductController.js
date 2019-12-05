const axios = require('axios');
const Product = require('../model/Product');

module.exports = {

    async store(req, res){

        const { productname } = req.body;

        const productExists = await Product.findOne({ name: productname });

        if(productExists){
            return res.json(productExists);
        }

        const response = await axios.get(`???`);

        const { productname, preco, quant, categoria } = response.data;

        const product = await Product.create({

            name: productname,
            preco,
            quant,
            categoria,
        });

        console.log(response.data);

        //por conta do axios ser assíncrono, temos que informar nosso Controller que
        // o axios deve ser aguardado e que o store é um processo assíncrono, por isso
        // o await e o async.

        return res.json(product);
    }
    
}