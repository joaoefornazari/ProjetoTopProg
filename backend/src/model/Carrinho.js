const { Schema, model } = require('mongoose');

const CarrinhoSchema = new Schema({

    id:{

        type: Number,
        required: true,
    },

    produtos:[{

        type: Schema.Types.ObjectId,
        ref: 'Product',

    }],

    total_preco:{

        type: Number,
        required: true,
    },

    forma_pgto:{

        type: Number,
        required: true,
    }

}, {

    timestamps: true,
    
});

module.exports = model('Carrinho', CarrinhoSchema); 