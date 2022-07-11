import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Vehiculo=new Schema({
    placa:{
        type:String,
        required:true
    },
    fecha_ingreso:{
        type:Date,
        required:false
    },
    fecha_salida:{
        type:Date,
        required:false
    },
    id_celda:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:false
    },
    total_pago:{
        type:Number,
        required:true,
        default:0
    }
})

export const modeloVehiculo=mongoose.model('vehiculos',Vehiculo)