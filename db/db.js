'use strict'
const cassandra = require("express-cassandra")
async function connectDB(){
    const models = cassandra.createClient({
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
 
    return models
}
module.exports = connectDB
        
    
    





