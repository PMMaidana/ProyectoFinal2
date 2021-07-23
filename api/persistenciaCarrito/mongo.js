const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/ecommerce";

const schema = new mongoose.Schema({
    fecha: { type: Date, default: new Date()},
    producto: { type: String, require: true, max: 300}
});

const MyModel = mongoose.model('carrito', schema);
const ProdModel = mongoose.model('productos', schema)

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

    async guardar(id) {
        let newProducto = await ProdModel.find( { _id: id } )
        return MyModel.create( {producto: `${newProducto}` });
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