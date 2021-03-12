'use strict'
const connectDB = require('../db/db')
const errores = require('./errores')
const model = require('../db/models')
let db = connectDB
module.exports = {
    createUsuario: async(root,{input})=>{
        const newUsuario = Object.assign(input)
        let usuario
        try{
            newUsuario.id = _id()
            usuario = new db.usuarios(newUsuario)
            usuario.save(function(err){
                if(err) console.log(err)
                else console.log("Yuppie!")
            })
  
        }catch(error){
            console.log("Error al crear un nuevo Usuario")
            errores(error)
        }
       return newUsuario;
    },editUsuario: async ( root,{id,input} ) => {
        let usuario 
        let usuarioeditado
        const usuarioEdit = Object.assign(input)

        try {
             usuario =  db.usuarios.findOne({id:id},{raw:true},(err,res) => {        
                    Promise.resolve(res)
                })   
            if(usuario){
                usuarioEdit.id = id
                usuarioeditado = new db.usuarios(usuarioEdit); 
                usuarioeditado.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                return usuarioeditado       
            }else{
                console.log("No existe el id")
                return null
            }         
        } catch (error) {
            console.log("Error al editar un Usuario ")
            errores(error)
        }
        
    },deleteUsuario: async (root, {id}) =>{
        let usuario
        try {
                usuario = db.usuarios.findOne({id:id},{raw:true},(err,res) => {   
                    Promise.resolve(res)
                }) 
            if(usuario){
                db.usuarios.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
            }else{
                return null
            }
            return usuario   
            
        } catch (error) {
            console.log("Error al eliminar un Usuario")
            errores(error)
        }
    },
    createCategoria: async(root,{input}) => {
        const newCategoria = Object.assign(input)     
        let categoria

        try {     
            newCategoria.id = _id()
            categoria = new db.categorias(newCategoria);
            categoria.save(function(err){
                if(err) console.log(err)
                else console.log("Yuppie!")
            })
        } catch (error) {
            console.log("Error al crear una nueva Categoria")
            errores(error)
        }
        return newCategoria
    },editCategoria: async (root,{id,input}) => {
        let categoria
        let categoriaeditado
        const categoriaEdit = Object.assign(input)
        try {
            
             categoria =  db.categorias.findOne({id:id},{raw:true},(err,res) => {        
                    resolve(res)
                })
               
            if(categoria){
                categoriaEdit.id = id
                categoriaeditado = new db.categorias(categoriaEdit); 
                categoriaeditado.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                return categoriaeditado       
            }else{
                console.log("No existe el id")
                return null
            }
        }catch (error) {
                console.log("Error al crear una nueva Categoria")
                errores(error)        
            }
            
    },deleteCategoria: async(root, {id}) =>{
        let categoria   
        try {
            
            categoria = db.categorias.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })        
            if(categoria){
                db.categorias.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
            }else{
                return null
            }
            return categoria   
            
        } catch (error) {
            console.log("Error al eliminar una categoria")
            errores(error)
            
        }

    },
    
    createComentario: async( root,{input} ) => {
        const newComentario = Object.assign(input)       
        let comentario
        let usuario    
        let post   
        try {
            
            usuario =  db.usuarios.findOne({id:input.usuariosid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            post = db.posts.findOne({id:input.postsid},{raw:true},(err,res) => {        
                resolve(res)
            })

            if (usuario && post) {
                
                comentario = new db.comentarios(newComentario);
                comentario.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                
                return comentario
            } else {
                console.log("entre por que no hay")
                return null
            }
           
        } catch (error) {
            console.log("Error al crear un comentario")
            errores(error)
        }
       
    },editComentario: async(root,{ id, input}) => {
        
        let comentario
        const comentarioEdit = Object.assign(input)

        try {
            
            comentario = db.comentarios.findOne({id:id},{raw:true},(err,res) => {        
                      Promise.resolve(res)
                  })
                 
            if(comentario){
                
                comentarioEdit.id = id
                comentarioeditado = new db.comentarios(input); 
                comentarioeditado.save(function(err){  
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                
                return comentarioeditado       
            }else{
                console.log("No existe el id")
                return null
            }  
        } catch (error) {
            console.log("Error al editar un comentario")
            errores(error)
        }

    },deleteComentario : async (root,{id}) => {
        let comentario
        try {
           
            comentario = db.comentarios.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
              
            if(comentario){
                db.comentarios.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
                return comentario   
            }else{
                return null
            }
        } catch (error) {
            console.log("Error al eliminar un comentario")
            errores(error)
        }
        
    },
    createPost: async (root,{ input }) => {
        const newPost = Object.assign(input)
        let usuario
        let categoria
        let post
        try {
            usuario = db.usuarios.findOne({id:input.usuariosid},{raw:true},(err,res) => {        
                    resolve(res)
                })
           
            categoria = db.categorias.findOne({id:input.categoriasid},{raw:true},(err,res) => {        
                    resolve(res)
                })

            if (usuario && categoria) {
                
                post = new db.posts(newPost)
                post.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                return post
            } else {
                console.log("entre por que no hay")
                return null
            }

        }catch(err){
            console.log("Error al crear un Post")
            errores(err)
        }
    },editPost: async (root, { id , input}) => {
        let post
        let posteditado
        const postEdit = Object.assign(input)
         try {
            
            post = db.posts.findOne({id:id},{raw:true},(err,res) => {        
                      resolve(res)
                  })
            if(post){ 
                postEdit.id = id
                posteditado = new db.posts(postEdit); 
                posteditado.save(function(err){   
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                return posteditado       
            }else{
                console.log("No existe el id")
                return null
            }   
         } catch (error) {
             console.log("Erro al editar Post")
             errores(error)
         }


    },
    deletePost : async (root, {id}) => {
        let post
        try {
    
            
            post = db.posts.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
              
            if(post){
                db.posts.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
                return post   
            }else{
                return null
            }
            
        } catch (error) {
            console.log("Error al eliminar un Post")
            errores(error)
        }

    }
}
function _id(){
    var dt = new Date().getTime();
    var uuid = '1xaxxxxxxxxxxxxxxxxx1qtxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}