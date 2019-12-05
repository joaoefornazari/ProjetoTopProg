const { Schema, model } = require('mongoose');

const CompraSchema = new Schema({

    id:{

        type: Number,
        required: true,
    },

    carrinhoId:{

        type: Number,
        required: true,
        ref: 'Carrinho',
    },

    produtos:[{

        type: Schema.Types.ObjectId,
        ref: 'Product',

    }],

}, {

    timestamps: true,
    
});

module.exports = model('Carrinho', CarrinhoSchema); 