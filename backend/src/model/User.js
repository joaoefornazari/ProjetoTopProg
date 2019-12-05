const { Schema, model} = require('mongoose');

const UserSchema = new Schema({

    username:{
        type: String,
        required: true,
    },

    senha:{
        type: String,
        required: true,
    },

    carrinho:{

        type: Schema.Types.ObjectId,
        ref: 'Carrinho',
    }
}, {

    timestamps: true,
    
});

module.exports = model('User', UserSchema); 