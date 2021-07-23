const options = require('../../config/mariadb')
const knex = require ('knex')(options);

class Mariadb{
    constructor() { }

    listar(){        
        knex.select('*').from('carrito')
        .then((row)=> {
            console.log(row);
        })
    }

    guardar(id){
        let producto = knex.select('*').from('productos').where({'id':id})
        knex.from('carrito').insert(producto)
        .then(() => console.log('producto agregado'))
        .catch((err) => {console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        })
    }
       
    borrar(id){
        try {
            knex.from('carrito').where({'id':id}).del()
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
}

module.exports = Mariadb;