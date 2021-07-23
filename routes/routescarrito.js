const express = require('express')
const routerCarrito = express.Router()
const controller = require('../api/persistenciaCarrito')

const Persistencia = controller.getPersistencia('mongo');
const instancia = new Persistencia();

routerCarrito.post('/carrito/agregar', (req, res) => {
    try {
        
        res.send(instancia.guardar(req.body));
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

routerCarrito.get('/carrito/listar', (req, res) => {
    try {
        res.send(instancia.listar());
    } catch (error) {
        res.status(500).send(error.message);
    }
});

routerCarrito.delete('/carrito/borrar/:id',(req,res)=>{
    try {
        res.send(instancia.borrar(req.params.id));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = routerCarrito;