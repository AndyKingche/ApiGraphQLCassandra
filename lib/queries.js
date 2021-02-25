'use strict'
const connectDB = require('../db/db')
const errores = require('./errores')
const model = require('../db/models')
const Uuid  = require('cassandra-driver').types.Uuid

let modelo
let db
module.exports ={
    getUsuarios:async() => {
        
        let  usuarios= []
        try{
            db= await connectDB()
            modelo = await db.loadSchema('usuarios', model.Usuario())
            usuarios =  await new Promise((resolve,rejrect)=>{    
                modelo.find({},{raw: true},(err,res)=>{
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
            db = await connectDB()
            
            modelo = await db.loadSchema('usuarios',model.Usuario())
            usuario = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {
                    
                    resolve(res)
                })
            })   
            console.log("usuarios ", usuario)
            return usuario
        } catch (error) {
            console.log("Error al realizar GetUsuario por id")
            errores(error)         
        }
    },
    getCategorias: async() => {
        let categorias=[]
        try{
            db = await connectDB()
            modelo = await db.loadSchema('categorias',model.Categoria())
            categorias = await new Promise((resolve,reject)=>{
                modelo.find({},{raw:true},(err,res) => {
                    console.log("caetgroias, ",res)
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
            db = await connectDB()
            modelo = await db.loadSchema('categorias',model.Categoria())
            
            categoria = new Promise((resolve,reject)=>{
                modelo.findOne({id: id},{raw:true},(err,res) => {
                    resolve(res)
                })
            })   
            return categoria
        }catch(error){
            console.log("Error al realizar Get Categoria por id")
            errores(error)
        }
    },
    getEtiquetas: async() => {
        let etiquetas = []
        try{   
            db = await connectDB()
            modelo = await db.loadSchema('etiquetas',model.Etiqueta())
            etiquetas = await new Promise((resolve,reject)=>{
                modelo.find({},{raw:true},(err,res) => {
                    resolve(res)
                })
            })   
            return etiquetas
        }catch(error){
            console.log("Error al realizar Get Etiquetas")
             errores(error)
        }
    },getEtiqueta:async(root,{id}) => {
        let etiqueta
        try {
            db = await connectDB()
            modelo = await db.loadSchema('etiquetas',model.Etiqueta())
            etiqueta = await new Promise((resolve,reject)=>{
                modelo.findOne({id: id},{raw:true},(err,res) => {
                    resolve(res)
                })
            })   
            return etiqueta
        } catch (error) {
            console.log("Error al realizar Get Etiqueta por id")
            errores(error)
        }           
    },
    getComentarios: async() => {
        let comentarios = []

        try {
            db = await connectDB()
            modelo = await db.loadSchema('comentarios',model.Comentario())
            comentarios = await new Promise((resolve,reject)=>{
                modelo.find({},{raw:true},(err,res) => {
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
            db = await connectDB()
            modelo = await db.loadSchema('comentarios',model.Comentario())
            comentario = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {
                    resolve(res)
                })
            })       
            return comentario
        } catch (error) {
            console.log("Error al realizar Get Comentario por id")
            errores(error)
            
        }
    },
    getPosts: async() => {
        let posts = []
        try {
            db = await connectDB()
            modelo = await db.loadSchema('posts',model.Post())
            posts = await new Promise((resolve,reject)=>{
                modelo.find({},{raw:true},(err,res) => {
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
        let post 
        try {
            db = await connectDB()
            modelo =await db.loadSchema('posts',model.Post())
            post = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {
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