const options = require('../../config/mariadb')
const knex = require ('knex')(options);

class Mariadb{
    constructor() { }

    listar(){        
        knex.select('*').from('productos')
        .then((row)=> {
            console.log(row);
        })
    }

    listarPorId(id){
        if(id==undefined){
            producto = 'Producto no encontrado';
        }
        knex.select('*').from('productos').where('id', id)
        .then((row)=> {
            console.log(row);
        })
        .catch((err) => {console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        })
    }

    guardar(producto){
        knex.from('productos').insert(producto)
        .then(() => console.log('producto agregado'))
        .catch((err) => {console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        })
    }
       
    borrar(id){
        try {
            knex.from('productos').where({'id':id}).del()
            .then(()=> {
                console.log('borrando');
            })
            .finally(()=> {
                knex.destroy()
            })
        } catch (error) {
            return [{
                error: error
            }];
        }
    }

    actualizar(id, producto){
        try {
            knex.from('productos').where({'id':id}).update({
                precio: producto.precio,
                producto: producto.producto
            })
            .then(()=> {
                console.log('updateado');
            })
            .finally(()=> {
                knex.destroy()
            })
        } catch (error) {
            return [{
                error: error
            }];
        }
    }
}

module.exports = Mariadb;