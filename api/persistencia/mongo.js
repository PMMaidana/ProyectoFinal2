const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/ecommerce";

const schema = new mongoose.Schema({
    nombre: { type: String, require: true, max: 50},
    fecha: { type: Date, default: new Date()},
    descripcion: { type: String, require: true, max: 400 },
    codigo: { type: Number },
    foto: { type: String },
    precio: { type: Number},
    stock: { type: Number }
});

const MyModel = mongoose.model('productos', schema);

async function connect() {
    try {await mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`mongoose conectado en ${uri}`);
    return null}
    catch (error) {console.log(error);}
}

connect();

class Mongo {

    constructor() { }

    async listar(){
        console.log(await MyModel.find({}))
        return await MyModel.find({})
    }

    async guardar(mensaje) {
        return MyModel.create(mensaje);
    }

    async borrar(id){
        await MyModel.findByIdAndDelete( { _id: id } )
    }

    async actualizar(id, toUpdate) {
        return MyModel.findByIdAndUpdate(id, toUpdate);
    }

    async borrar(id){ 
            return MyModel.findByIdAndDelete(id);
    }
}

module.exports = Mongo;