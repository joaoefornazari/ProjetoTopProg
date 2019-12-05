const { Schema, model} = require('mongoose');

const ProductSchema = new Schema({

    name:{
        type: String,
        required: true,
    },

    preco:{
        type: Number,
        required: true,
    },

    quant:{

        type: Number,
        required: true,
    },

    categoria:{

        type: String,
        required: true,
    }

}, {

    timestamps: true,
    
});

module.exports = model('Product', ProductSchema); 