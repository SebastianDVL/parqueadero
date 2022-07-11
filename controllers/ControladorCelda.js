import {ServicioCelda} from '../services/ServicioCelda.js'

class ControladorCelda{

    constructor(){}

    async buscarCeldas(request,response){

        let servicioCelda=new ServicioCelda()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioCelda.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        }
        
    }

    async buscarCelda(request,response){

        let servicioCelda=new ServicioCelda()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando la celda',
                data: await servicioCelda.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando la celda'+error,
                data: null
            })
        }
    }

    async editarCelda(request,response){

        let servicioCelda=new ServicioCelda()
        try{
            let id=request.params.id
            let datos=request.body
            await servicioCelda.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando la celda',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando la celda'+error,
                data: null
            })

        }

    }

    async agregarCelda(request,response){
        let servicioCelda=new ServicioCelda()
        try{

            let datos=request.body
            await servicioCelda.ingresar(datos)
            response.status(200).json({
                mensaje:'exito registrando la celda',
                data: null
            })

        }catch(error){

            response.status(200).json({
                mensaje:'fallo registrando la celda'+error,
                data: null
            })

        }
    }

}