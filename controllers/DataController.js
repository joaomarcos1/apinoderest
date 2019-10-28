const User = require ('../models/User');
const Data = require ('../models/Data');





module.exports = {


    async index (req, res){
        const { user_id } = req.headers;
        const dado = await Data.find({user: user_id})

        if (!dado){
            return res.status(400).json({error:  "Data does not exists"});
        }

        return res.json (dado);
    },




    async store(req, res){
    
        const { uri, request_method, user_agent } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({error: 'User does not exists'});
        }


        const data = await Data.create({
           user: user_id,
           uri,
           request_method,
           user_agent
           //acesstime,
        })

        return res.json( data );
    }
};




