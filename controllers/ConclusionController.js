const User = require ('../models/User');
const Data = require ('../models/Data');


module.exports = {
    async show (req, res){
        const { user_id } = req.headers;

        const dado = await Data.find({ user: user_id });

        if (!dado){
            return res.status(400).json({error:  "Data does not exists"});
        }



        console.log("Usuário ID: " +  user_id +"\n\n"+ dado);

        return res.json(dado);

        

        
    } 
};