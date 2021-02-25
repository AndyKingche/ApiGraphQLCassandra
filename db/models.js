'use strict'
module.exports ={
    Usuario: () =>{
        //let db = await connectDB()
            let User = {
                fields: {
                id:"int",
                nombre: "text",
                email:  "text",
                nickname:"text",
                login: "text",
                password:"text"
              },
              key:["id"]
            }
            return User
      
        },
        Categoria: ()=>{
            let Category = {
                fields: {
                id:"int",
                nombre_categoria: "text"
              },
              key:["id"]
            }
            return Category
        },
        Etiqueta:()=>{
            let Tags = {
                fields: {
                id:"int",
                nombre_etiqueta: "text"
              },
              key:["id"]
            }
            return Tags
        },
        Comentario:()=>{
            let Comment = {
                fields: {
                id:"int",
                usuariosid:"int",
                contenido: "text"
              },
              key:["id"]
            }
            return Comment

        },
        Post: () => {
            let Post = {
                fields: {
                id:"int",
                categoriasid:"int",
                comentarioid:"int",
                usuariosid:"int",
                titulo: "text",
                estado: "boolean",
                fecha_publicacion:"timestamp"
              },
              key:["id"]
            }

            return Post

        },
        PostEtiqueta:() => {
            let PostEtiqueta 
        } 

} 



