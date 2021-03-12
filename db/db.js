'use strict'
const cassandra = require("express-cassandra")
//const cassandra = require('cassandra-driver');
const models = require('./models')
let modelo

function connectDB(){
     const conect = cassandra.createClient({
        clientOptions:{
            contactPoints: ['127.0.0.1'],
            protocolOptions: { port: 9042 },
            keyspace: 'keyspace1',
            queryOptions: {consistency: cassandra.consistencies.one}
        },
        ormOptions: {
            defaultReplicationStrategy : {
                class: 'SimpleStrategy',
                replication_factor: 1
            },
            migration: 'safe',
        }
    })
    modelo = {
     usuarios : conect.loadSchema('usuarios', models.Usuario()),
     comentarios: conect.loadSchema('comentarios',models.Comentario()),
     categorias: conect.loadSchema('categorias', models.Categoria()),
     posts: conect.loadSchema('posts', models.Post())
    }
return conect
}
connectDB()

module.exports = modelo
        
    
    





