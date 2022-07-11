import {modeloCelda} from '../models/modeloCelda.js'

export class ServicioCelda{

    constructor(){}

    async buscar(){
        let celdas=await modeloCelda.find()
        return celdas
    }

    async buscarPorId(idCelda){
        let celda=await modeloCelda.findById(idCelda)
        return celda
    }

    async editar(idCelda,datoCelda){
        return await modeloCelda.findByIdAndUpdate(idCelda,datoCelda)
    }

    async ingresar(infoCelda){
        let celdaARegistrar=new modeloCelda(infoCelda)
        return await celdaARegistrar.save()
    }


}