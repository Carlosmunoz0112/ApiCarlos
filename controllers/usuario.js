const {response} = require('express')

//Importación de los modelos
const Usuario = require('../models/usuario')

//Método GET de la API
const usuarioGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const usuarios = await Usuario.find()

    res.json({  //Respuesta en JSON
        usuarios
    })   
}

//Método POST de la api
const usuarioPost = async (req, res = response) => {
    const { nombre, password, rol, estado } = req.body;
    console.log(req.body)
    const usuario = new Usuario({ nombre, password, rol, estado });
    try {
        await usuario.save();
        res.status(201).json({
            ok: true,
            msg: 'Usuario creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario',
            error
        });
    }
};
//Modifcación
const usuarioPut = async(req, res = response) => {
    const {nombre, password, rol, estado} = req.query
    let mensaje = 'Modificación exitosa'
    try{
         await Usuario.findOneAndUpdate({nombre: nombre}, 
            {password: password, rol:rol, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const usuarioDelete = async(req, res) => {

    const {_id} = req.query
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const usuario = await Usuario.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}