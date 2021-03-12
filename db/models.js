'use strict'
module.exports ={
    Usuario: () =>{
        //let db = await connectDB()
            let User = {
                fields: {
                id:"text",
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
                id:"text",
                nombre_categoria: "text"
              },
              key:["id"]
            }
            return Category
        },
        Comentario:()=>{
            let Comment = {
                fields: {
                id:"text",
                usuariosid:"text",
                postsid:"text",
                contenido: "text",

              },
              key:["id"]
            }
            return Comment

        },
        Post: () => {
            let Post = {
                fields: {
                id:"text",
                categoriasid:"text",
                usuariosid:"text",
                titulo: "text",
                estado: "boolean",
                contenido:"text",
                keywords:"text",
                fecha_publicacion:"timestamp"
              },
              key:["id"]
            }

            return Post

        }

} 



