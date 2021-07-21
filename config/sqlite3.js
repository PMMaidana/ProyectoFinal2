const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/../db/productos.sqlite'
    },
    useNullAsDefault: true
}

module.exports = sqlite3;