import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Administrador=new Schema({
    nombre:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true
    },
    turno:{
        type:String,
        required:false
    },
    telefono:{
        type:String,
        required:false
    },
    estado:{
        type:Boolean,
        required:true
    },
    salario:{
        type:Number,
        required:true
    }
})

export const modeloAdministrador=mongoose.model('administradores',Administrador)