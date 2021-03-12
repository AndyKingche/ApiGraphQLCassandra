'use strict'
const connectDB = require('../db/db')
const model = require('../db/models')
const errores = require('./errores')
const { dataloaderUsuarios, dataloaderComentarios, dataloaderPosts, dataloaderCategoria} = require('./dataloader-cassandra')
let db = connectDB
module.exports = {
    Comentarios :{
        usuariosid: async({ usuariosid }) => dataloaderUsuarios.load(usuariosid),
        postsid: async({postsid})=> {
            let posts = []
            posts = await new Promise((resolve,reject)=>{
    
                db.posts.find({id:postsid},{raw:true, allow_filtering: true},(err,res)=>{
             resolve(res)
            
            
        })})
        return posts
        }
    },ComentariosPost :{
        usuariosid: async({ usuariosid }) => Array(dataloaderUsuarios.load(usuariosid))
    },Posts:{
        categoriasid: async ( {categoriasid} ) => Array(dataloaderCategoria.load(categoriasid)),
        comentarios: async ( {id} ) => Array(dataloaderComentarios.load(id)),
        usuariosid: async ( {usuariosid} ) => Array(dataloaderUsuarios.load(usuariosid))
    },
    PostsComentario:{
        categoriasid: async ( {categoriasid} ) => Array(dataloaderCategoria.load(categoriasid)),
        usuariosid: async ( {usuariosid} ) => Array(dataloaderUsuarios.load(usuariosid))
}

}