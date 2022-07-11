import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Celda=new Schema({
    numero:{
        type:Number,
        required:true
    },
    tarifa:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:false
    }
    
})

export const modeloCelda=mongoose.model('celdas',Celda)