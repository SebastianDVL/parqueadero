import {ServicioVehiculo} from "../services/ServicioVehiculo.js"
import {ServicioCelda} from "../services/ServicioCelda.js"

export class ControladorVehiculo{

    constructor(){}

    async buscarVehiculos(req,res){
        let servicioVehiculo  = new ServicioVehiculo()

        try {
            res.status(200).json({
                message: "Exito al encontrar vehiculos",
                data: await servicioVehiculo.buscar(),
                success:true
            })
        } catch (error) {
            res.status(400).json({
                message: "Fallo en la consulta" + error,
                data:null,
                success:false
            })
        }
    }   

    async buscarVehiculo(req,res){
        let servicioVehiculo = new ServicioVehiculo()
        let id = req.params.id
        try {
            res.status(200).json({
                message:"Exito al encontrar vehiculo",
                data: await servicioVehiculo.buscarPorId(id),
                success:true
            })
        } catch (error) {
            res.status(400).json({
                message: "Fallo al consultar" + error,
                data:null,
                success:false
            })
        }
    }

    async edit(req,res){
        let servicioVehiculo  = new ServicioVehiculo()
        let servicioCelda=new ServicioCelda()
        try {
            let id = req.params.id
            let data = req.body

            let celda = await servicioCelda.buscarPorId(data.id_celda)
            
            let tarifa = celda.tarifa

            let fechaSalida = new Date()
            
            let vehiculo = await servicioVehiculo.buscarPorId(id)    

            let fechaEntrada = vehiculo.fecha_ingreso

            let diferencia = fechaSalida.getMinutes()-fechaEntrada.getMinutes()
            
            let costo = tarifa * diferencia

            data.fecha_salida = fechaSalida
            data.total_pago = costo

            await servicioVehiculo.editar(id,data)

            
            res.status(200).json({
                message:"Exito al editar vehiculo",
                data:[],
                success:true
            })
        } catch (error) {
            response.status(400).json({
                message: "Fallo al editar vehiculo",
                data:null,
                success:false
            })
        }
    }

    async agregarVehiculo(req,res){
        let servicioVehiculo  = new ServicioVehiculo()
        let servicioCelda =new ServicioCelda()
        try {
            let data = req.body

            let celda = await servicioCelda.buscarPorId(data.id_celda)

            if(celda.estado){
                
                data.fecha_ingreso = new Date()

             
                await servicioVehiculo.ingresar(data)
                res.status(200).json({
                    message:"Exito al ingresar vehiculo",
                    data: [],
                    success:true
                })
            }else{
                res.status(400).json({
                    message:"Celda en uso",
                    data: null,
                    success:false
                })
            }
          
        } catch (error) {
            response.status(400).json({
                message: "Fallo al ingresar vehiculo",
                data: null,
                success:false
            })
        }
    }

}