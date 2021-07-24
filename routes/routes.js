const express = require('express')
const router = express.Router()
const controller = require('../api/persistencia')

const Persistencia = controller.getPersistencia('mariadb');
const instancia = new Persistencia();

router.post('/productos/agregar', (req, res) => {
    try {
        res.send(instancia.guardar(req.body));
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/productos/listar', (req, res) => {
    try {
        res.send(instancia.listar());
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/productos/listar/:id?', (req, res) => {
    try {
        res.send(instancia.listarPorId(parseInt(req.params.id)));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/productos/actualizar/:id',(req,res)=> {
    try {
        res.send(instancia.actualizar(req.params.id, req.body));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/productos/borrar/:id',(req,res)=>{
    try {
        res.send(instancia.borrar(req.params.id));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;