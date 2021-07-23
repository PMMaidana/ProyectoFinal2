const mongoose = require('mongoose');

const uri = "mongodb+srv://root:root@cluster0.suzx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const schema = new mongoose.Schema({
    fecha: { type: Date, default: new Date()},
    producto: { type: String, require: true, max: 300}
});

const MyModel = mongoose.model('carrito', schema);
const ProdModel = mongoose.model('productos', schema)

async function connect() {
    try {await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`mongoose conectado en ${uri}`);
    return null}
    catch (error) {console.log(error);}
}

connect();

class MongoDbaaS {

    constructor() {}

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

module.exports = MongoDbaaS;