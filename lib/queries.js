'use strict'
const connectDB = require('../db/db')
const errores = require('./errores')
let modelo
let db = connectDB
module.exports ={
    getUsuarios:async(root,{limit}) => {
        limit = limit !=null ? limit : 0
        let  usuarios= []
        try{          
            usuarios = new Promise((resolve,rejrect)=>{    
                db.usuarios.find({$limit:50000},{fetchSize:limit},(err,res)=>{
                   resolve(res)
                
                })         
           })

           return usuarios
        }catch(error){
            console.log("Error al realizar GetUsuarios")
            errores(error);
        }
        
    },
    getUsuario: async(root,{id})=>{
        let usuario
        try {   
            usuario = await new Promise((resolve,reject)=>{
                db.usuarios.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            return usuario
        } catch (error) {
            console.log("Error al realizar GetUsuario por id")
            errores(error)         
        }
    },
    getCategorias: async(root,{limit}) => {
        limit = limit !=null ? limit : 0
        let categorias=[]
        try{
            categorias = new Promise((resolve,rejrect)=>{    
                db.categorias.find({$limit:50000},{fetchSize:limit},(err,res)=>{
                   resolve(res)          
                })                 
           })   
            return categorias
        }catch(error){
            console.log("Error al realizar Get Categorias")
            errores(error)           
        }
    },
    getCategoria: async(root,{id})=>{
        let categoria
        try{
            categoria = await new Promise((resolve,reject)=>{
                db.categorias.findOne({id:id},{raw:true},(err,res) => {
                    
                    resolve(res)
                })
            })   
            return categoria
        }catch(error){
            console.log("Error al realizar Get Categoria por id")
            errores(error)
        }
    },
    getComentarios: async(root,{limit}) => {
        limit = limit !=null ? limit : 0
        let comentarios = []

        try {
            comentarios = new Promise((resolve,rejrect)=>{    
                db.comentarios.find({$limit:50000},{fetchSize:limit},(err,res)=>{
                   resolve(res)
                
                })         
           })      
            return comentarios
        } catch (error) {
            console.log("Error al realizar el Get Comentarios")
            errores(error)
        }
    },
    getComentario: async(root, {id}) => {
        let comentario
        try {
            comentario = await new Promise((resolve,reject)=>{
                db.comentarios.findOne({id:id},{raw:true},(err,res) => {
                    
                    resolve(res)
                })
            })       
            return comentario
        } catch (error) {
            console.log("Error al realizar Get Comentario por id")
            errores(error)
            
        }
    },
    getPosts: async(root,{limit}) => {
        limit = limit !=null ? limit : 0
        let posts = []
        try {
            posts = new Promise((resolve,rejrect)=>{    
                db.posts.find({$limit:50000},{fetchSize:limit},(err,res)=>{
                   resolve(res)
                
                })         
           })
            return posts
        } catch (error) {
            console.log("Error al realizar Get Posts")
            errores(error)
            
        }

    },
    getPost: async (root,{id}) => {
        console.log("id", id)
        let post 
        try {
            post = await new Promise((resolve,reject)=>{
                db.posts.findOne({id:id},{raw:true},(err,res) => {              
                    resolve(res)
                })
            })      
            return post
        } catch (error) {
            console.log("Error al realizar get Post por id")
            errores(error)
            
        }
    
    }

}