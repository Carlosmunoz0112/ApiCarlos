const express=require('express');

const dbConnection=require('../database/config')


class server{
    constructor(){
        this.app=express();
        this.port= process.env.PORT || 8087
        this.arriendosPath='/api/arriendos'
        this.personasPath='/api/personas'
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/public"));
    }
    routes()
    {
        this.app.use(this.arriendosPath, require('../routes/arriendos'))
        this.app.use(this.personasPath, require('../routes/personas'))
    }
    async dbConectar(){
        await dbConnection()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports= server