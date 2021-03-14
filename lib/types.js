'use strict'
const connectDB = require('../db/db')
const errores = require('./errores')
const { dataloaderUsuarios, dataloaderComentarios, dataloaderPosts, dataloaderCategoria} = require('./dataloader-cassandra')
let db = connectDB
module.exports = {
    Comentarios :{
        usuariosid: async({ usuariosid }) =>   dataloaderUsuarios.load(usuariosid),
        postsid: async({postsid})=> await dataloaderPosts.load(postsid)
    },ComentariosPost :{
        usuariosid: async({ usuariosid }) => await dataloaderUsuarios.load(usuariosid)
    },Posts:{
        categoriasid: async ( {categoriasid} ) => await dataloaderCategoria.load(categoriasid),
        comentarios: async ( {id} ) => await dataloaderComentarios.load(id),
        usuariosid: async ( {usuariosid} ) => await dataloaderUsuarios.load(usuariosid)
    },
    PostsComentario:{
        categoriasid: async ( {categoriasid} ) => dataloaderCategoria.load(categoriasid),
        usuariosid: async ( {usuariosid} ) => dataloaderUsuarios.load(usuariosid) }

}