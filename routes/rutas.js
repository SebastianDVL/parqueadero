import express from 'express'

export let rutas=express.Router()

//Rutas administradores

let administrador = new administrador()

rutas.get('/api/v1/parqueadero/admins/', administrador.buscarTodos)
rutas.get('/api/v1/parqueadero/admin/:id/parking', administrador.buscarPorId)//Jhon
rutas.post('/api/v1/parqueadero/admin/',administrador.insertar)
rutas.put('/api/v1/parqueadero/admin/:id/', administrador.editar)


//Rutas celdas

rutas.get('/api/v1/parqueadero/celdas/', administrador.buscarTodos)
rutas.get('/api/v1/parqueadero/celda/:id/', administrador.buscarPorId)
rutas.post('/api/v1/parqueadero/celda/',administrador.insertar)
rutas.put('/api/v1/parqueadero/celda/:id/', administrador.editar)

//Rutas vehiculos

rutas.get('/api/v1/parqueadero/vehiculos/', administrador.buscarTodos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', administrador.buscarPorId)
rutas.post('/api/v1/parqueadero/vehiculo/',administrador.insertar)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', administrador.editar)