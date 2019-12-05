const axios = require('axios');
const User = require('../models/User');

module.exports = {

    async store(req, res){

        const { username } = req.body;

        const userExists = await User.findOne({ user: username });

        if(userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`???`);

        const { username, senha } = response.data;

        const usr = await User.create({

            username: username,
            senha,

        });

        console.log(response.data);

        //por conta do axios ser assíncrono, temos que informar nosso Controller que
        // o axios deve ser aguardado e que o store é um processo assíncrono, por isso
        // o await e o async.

        return res.json(usr);
    }
    
}