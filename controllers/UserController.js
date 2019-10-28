const User = require('../models/User')

module.exports = {

    
 
    async index(req, res){
        const { user_id } = req.headers;
        const ret = await User.findById(user_id);
        if (!ret){
            return res.status(400).json({error: 'User does not exists'});
        }
        return res.json (ret);


    },

    


    async store(req, res){
        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if (!user){
            const user = await User.create({ email });
        }
        
        

        return res.json(user);
    }
};