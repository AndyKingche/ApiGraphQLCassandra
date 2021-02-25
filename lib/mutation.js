const connectDB = require('../db/db')
const errores = require('./errores')
const model = require('../db/models')

module.exports = {
    createUsuario: async(root,{input})=>{
        const newUsuario = Object.assign(input)
        let db
        let usuario
        try{
            db = await connectDB()
            await db.loadSchema('usuarios', model.Usuario())
            newUsuario.id = 2
            console.log("nerw", newUsuario)
            usuario = await new db.modelInstance.usuarios(newUsuario);
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
        let db
        let usuario 
        let usuarioeditado
        let modelo
        const usuarioEdit = Object.assign(input)

        try {
            db = await connectDB()
            modelo = await db.loadSchema('usuarios', model.Usuario())
            usuario = await new Promise((resolve,reject)=>{ 
              modelo.findOne({id:id},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })   
            if(usuario){
                usuarioEdit.id = id
                usuarioeditado = new db.modelInstance.usuarios(usuarioEdit); 
                usuarioeditado.save(function(err){
                    console.log("2")
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
            db = await connectDB()
            modelo = await db.loadSchema('usuarios', model.Usuario())
            usuario = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            if(usuario){
                db.modelInstance.usuarios.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
                return usuario   
            }else{
                return null
            }
            
        } catch (error) {
            console.log("Error al eliminar un Usuario")
            errores(error)
        }
    },
    createCategoria: async(root,{input}) => {
        const newCategoria = Object.assign(input)     
        let db
        let categoria

        try {
            db = await connectDB()
            await db.loadSchema('categorias', model.Categoria())
            newCategoria.id = 2

            categoria = await new db.modelInstance.categorias(newCategoria);
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
        let db
        let modelo
        let categoria
        let categoriaeditado
        const categoriaEdit = Object.assign(input)
        try {
            db = await connectDB()
            modelo = await db.loadSchema('categorias', model.Categoria())
            categoria = await new Promise((resolve,reject)=>{ 
              modelo.findOne({id:id},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })   
            if(categoria){
                categoriaEdit.id = id
                categoriaeditado = new db.modelInstance.categorias(categoriaEdit); 
                categoriaeditado.save(function(err){
                    console.log("2")
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
            db = await connectDB()
            modelo = await db.loadSchema('categorias', model.Categoria())
            categoria = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            if(categoria){
                db.modelInstance.categorias.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
                return categoria   
            }else{
                return null
            }
            
        } catch (error) {
            console.log("Error al eliminar una categoria")
            errores(error)
            
        }

    },
    createEtiqueta: async(root,{input}) => {
        const newEtiqueta = Object.assign(input)
        let db
        let etiqueta
        try {
            db = await connectDB()
            await db.loadSchema('etiquetas', model.Etiqueta())
            newEtiqueta.id = 2
            console.log("nerw", newEtiqueta)
            etiqueta = await new db.modelInstance.etiquetas(newEtiqueta);
            etiqueta.save(function(err){
                if(err) console.log(err)
                else console.log("Yuppie!")
            })
        }catch(error){
            console.log("Error al crear un nuevo Usuario")
            errores(error)
        }
        return newEtiqueta

    },editEtiqueta: async(root, { id, input }) => {
        let db
        let modelo
        let etiqueta
        let etiquetaeditado
        const etiquetaEdit = Object.assign(input)
        try {
            db = await connectDB()
            modelo = await db.loadSchema('etiquetas', model.Etiqueta())
            etiqueta = await new Promise((resolve,reject)=>{ 
            modelo.findOne({id:id},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })   
            if(etiqueta){
                etiquetaEdit.id = id
                etiquetaeditado = new db.modelInstance.etiquetas(etiquetaEdit); 
                etiquetaeditado.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                return etiquetaeditado       
            }else{
                console.log("No existe el id")
                return null
            }
            
        } catch (error) {
            console.log("Error al editar una Etiqueta")
            errores(error)
        }

    },deleteEtiqueta: async (root,{id}) => {
        let etiqueta 
        try {
            db = await connectDB()
            modelo = await db.loadSchema('etiquetas', model.Etiqueta())
            etiqueta = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            if(etiqueta){
                db.modelInstance.etiquetas.delete({id:id},function(err){
                    if(err) console.log(err);
                    else console.log('Yuppiie!');
                });
                return etiqueta   
            }else{
                return null
            }
            
        } catch (error) {
            console.log("Error al eliminar una etiqueta")
            errores(error)
            
        }
    },
    createComentario: async( root,{input} ) => {
        const newComentario = Object.assign(input)       
        let db
        let modelo
        let comentario
        let usuario       
        try {
            db = await connectDB()
            modelo = await db.loadSchema('usuarios', model.Usuario())
            usuario = await new Promise((resolve,reject)=>{ 
                modelo.findOne({id:input.usuariosid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })

            if (usuario) {
                await db.loadSchema('comentarios', model.Comentario())
                newComentario.id=2
                comentario = await new db.modelInstance.comentarios(newComentario);
                comentario.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                console.log("...", comentario)
                console.log("h0 ", newComentario)
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
        let db
        let modeloUs
        let modeloCo
        let comentario
        let comentarioeditado
        let usuario
        const comentarioEdit = Object.assign(input)
        console.log("...", comentarioEdit)
        try {
            db = await connectDB()
            modeloUs = await db.loadSchema('usuarios', model.Usuario())
            modeloCo = await db.loadSchema('comentarios', model.Comentario())
            usuario = await new Promise((resolve,reject)=>{ 
              modeloUs.findOne({id:input.usuariosid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })
            comentario = await new Promise((resolve,reject)=>{ 
                modeloCo.findOne({id:id},{raw:true},(err,res) => {        
                      resolve(res)
                  })
              })   
            console.log("",usuario)
            if(comentario){
                
                comentarioEdit.id = id
                comentarioeditado = await new db.modelInstance.comentarios(input); 
                comentarioeditado.save(function(err){
                   
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                console.log("comentartops", input)
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
            db = await connectDB()
            modelo = await db.loadSchema('comentarios', model.Comentario())
            comentario = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            if(comentario){
                db.modelInstance.comentarios.delete({id:id},function(err){
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
        let db
        let modelou
        let modeloco
        let modeloca
        let usuario
        let comentario
        let categoria
        let post
        try {
            db = await connectDB()
            modelou = await db.loadSchema('usuarios', model.Usuario())
            modeloco = await db.loadSchema('comentarios', model.Comentario())
            modeloca = await db.loadSchema('categorias', model.Categoria())
            usuario = await new Promise((resolve,reject)=>{ 
                modelou.findOne({id:input.usuariosid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })
            categoria = await new Promise((resolve,reject)=>{ 
                modeloca.findOne({id:input.categoriasid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })
            comentario = await new Promise((resolve,reject)=>{ 
                modeloco.findOne({id:input.comentarioid},{raw:true},(err,res) => {        
                    resolve(res)
                })
            })
            if (usuario, comentario, categoria) {
                await db.loadSchema('posts', model.Post())
                newPost.id=2
                post = await new db.modelInstance.posts(newPost);
                post.save(function(err){
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                console.log("...", post)
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
        let db 
        let modelo 
        let post
        let posteditado
        const postEdit = Object.assign(input)
         try {
            db = await connectDB()
            modelo = await db.loadSchema('posts', model.Post())
            
            post = await new Promise((resolve,reject)=>{ 
                modelo.findOne({id:id},{raw:true},(err,res) => {        
                      resolve(res)
                  })
              })   

            if(post){ 
                postEdit.id = id
                posteditado = await new db.modelInstance.posts(input); 
                posteditado.save(function(err){   
                    if(err) console.log(err)
                    else console.log("Yuppie!")
                })
                console.log("comentartops", input)
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
        let modelo
        try {
            db = await connectDB()
            modelo = await db.loadSchema('posts', model.Post())
            post = await new Promise((resolve,reject)=>{
                modelo.findOne({id:id},{raw:true},(err,res) => {   
                    resolve(res)
                })
            })   
            if(post){
                db.modelInstance.posts.delete({id:id},function(err){
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