const mongoose = require('mongoose')
const userRouter = require('../controllers/users')

//denifir el esquema para el usuario
const usuarioSchema = new mongoose.Schema({
    username:String,
    type:String
    
})

//configurar la respuesta del usuario en el esquema
usuarioSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

//registrar el modelo
const user = mongoose.model('user',usuarioSchema)

//exportar
module.exports = user