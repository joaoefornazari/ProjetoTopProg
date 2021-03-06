const { Schema, model } = require('mongoose');

const CarrinhoSchema = new Schema({

    id:{

        type: Number,
        required: true,
    },

    compra:{

        type: Schema.Types.ObjectId,
        ref: 'Compra',

    },

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