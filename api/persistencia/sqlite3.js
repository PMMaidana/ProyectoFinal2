const options = require('../../config/sqlite3')
const knex = require ('knex')(options);

class Sqlite3 {

    constructor() {}

    listar(){        
        knex.from('productos').select('*')
        .then((row)=> {
            console.log(row);
        })
    }

    listarPorId(id){
        if(id==undefined){
            producto = 'Producto no encontrado';
        }
        knex.from('productos').select('*').where('id', id)
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

module.exports = Sqlite3;