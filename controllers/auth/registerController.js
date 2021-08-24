import joi from 'joi'


const registerRontroller = {
    async register(req, res, next) {


        const registerSchema = joi.object({
            name: joi.string().min(3).max(30).required(),
            email: joi.string().email().required(),
            password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeatPassword: joi.ref('password')
        });


        const { error } = registerSchema.validate(req.body);



        if(error) {
            throw error;    
        } 




        res.json({msg: "Hello"})
    }
}


export default registerRontroller