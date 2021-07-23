const express = require('express');
const app = express();
const http = require('http').Server(app)

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));

const router = require('./routes/routes');
app.use('/api', router);

const routerCarrito = require('./routes/routescarrito');
app.use('/api', routerCarrito);

const PORT = process.env.PORT || 8081;

const server = http.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});

server.on('error', error => {
    console.error('Error de servidor: ', error);
});

module.exports = server;