import {modeloVehiculo} from '../models/modeloVehiculo.js'

export class ServicioVehiculo{

    constructor(){}

    async buscar(){
        let vehiculos=await modeloVehiculo.find()
        return vehiculos
    }

    async buscarPorId(idVehiculo){
        let vehiculo=await modeloVehiculo.findById(idVehiculo)
        return vehiculo
    }

    async editar(idVehiculo,datoVehiculo){
        return await modeloVehiculo.findByIdAndUpdate(idVehiculo,datoVehiculo)
    }

    async ingresar(infoVehiculo){
        let vehiculoARegistrar=new modeloVehiculo(infoVehiculo)
        return await vehiculoARegistrar.save()
    }


}