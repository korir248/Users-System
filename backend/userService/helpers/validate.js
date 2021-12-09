const joi = require('joi')

const validateUser = (user)=>{
    const schema = joi.object().keys({
        username: joi.string().required(),
        fullname: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
        cpassword: joi.string().min(8).required()
    } )

    console.log(schema.validate(user));    
    return schema.validate(user)
}

module.exports = validateUser