const connectDB = require('../db/db')
const DataLoader = require('dataloader')
let db = connectDB

async function user (keys) {
let usuarios = []
return await new Promise((resolve,reject)=>{
         db.usuarios.find({id:keys},{raw:true},(err,res)=>{
         resolve(res)    
    })
})

}
async function category (keys) {
    let categorias = []
    categorias = await new Promise((resolve,reject)=>{
        db.categorias.find({id:{'$in':keys}},{raw:true},(err,res)=>{
            resolve(res)
        })
    })
    console.log(categorias)
  return categorias
}
async function comment (keys) {

  let comentarios = []
    comentarios = new Promise((resolve,reject)=>{
        db.comentarios.find({postsid:{'$in':keys}},{raw:true},(err,res)=>{
            resolve(res)
        })
    })
  return comentarios
}
async function posteo (keys) {
    console.log("keys ", keys)
    posts = await new Promise((resolve,reject)=>{
        db.posts.find({id:{'$in':keys}},{raw:true, allow_filtering: true},(err,res)=>{
            resolve(res)
        })
    })
  return posts
}
const loaderCategorias = new DataLoader(keys=>category(keys),
{cacheKeyFn: key => key.toString()},
);

const loaderComentarios = new DataLoader(keys=>comment(keys),
{cacheKeyFn: key => key.toString()},
);

const loaderPosts = new DataLoader(keys=>posteo(keys),
{cacheKeyFn: key => key.toString()},
);

// const loaderUsuarios = new DataLoader(keys=>user(keys),
//   {cacheKeyFn: key => key.toString()},
// );
// const loaderUsuarios = new DataLoader(keys=>
//     user(...keys)
// );
const loaderUsuarios = new DataLoader(keys=>{
const promises = keys.map(id =>{
    return new Promise((resolve,reject)=>{
        db.usuarios.find({id:id},{raw:true},(err,res)=>{
        resolve(res)    
})
})
})
    return Promise.all(promises)
    
});
module.exports={
dataloaderUsuarios:loaderUsuarios,
dataloaderCategoria:loaderCategorias,
dataloaderPosts: loaderPosts,
dataloaderComentarios: loaderComentarios
}

