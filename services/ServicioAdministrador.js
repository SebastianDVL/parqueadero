import {modeloAdministrador} from '../models/modeloAdministrador.js'

export class ServicioAdministrador{

    constructor(){}

    async buscar(){
        let administradores=await modeloAdministrador.find()
        return administradores
    }

    async buscarPorId(idAdmin){
        let administrador=await modeloAdministrador.findById(idAdmin)
        return administrador
    }

    async editar(idAdmin,datoAdmin){
        return await modeloAdministrador.findByIdAndUpdate(idAdmin,datoAdmin)
    }

    async ingresar(infoAdmin){
        let administradorARegistrar=new modeloAdministrador(infoAdmin)
        return await administradorARegistrar.save()
    }

}