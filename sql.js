const options = require('./config/database');
const knex = require('knex')(options);

knex.schema.createTable('productos', table => {
    table.increments('id')
    table.string('nombre')
    table.integer('fecha')
    table.string('descripcion')
    table.integer('codigo')
    table.string('foto')
    table.real('precio') //decimal mariaDB
    table.integer('stock')
}).then(() => {
    console.log('tabla productos creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    knex.destroy();
});
