const { response } = require('express')

// Importación de los modelos
const Producto = require('../models/producto')

// Método GET de la API
const productoGet = async (req, res = response) => {
    // Consultar todos los productos
    const productos = await Producto.find()

    res.json({  // Respuesta en JSON
        productos
    })
}

// Método POST de la API
const productoPost = async (req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query // Captura de atributos
    try {
        const producto = new Producto(body) // Instanciando el objeto
        await producto.save() // Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

// Modificación
const productoPut = async (req, res = response) => {
    const { nombre, precio, descripcion } = req.query
    let mensaje = 'Modificación exitosa'
    try {
        await Producto.findOneAndUpdate({ nombre: nombre },
            { precio: precio, descripcion: descripcion })
    }
    catch (error) {
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

// Eliminación
const productoDelete = async (req, res) => {

    const { _id } = req.query
    let mensaje = 'La eliminación se efectuó exitosamente.'

    try {
        const producto = await Producto.deleteOne({ _id: _id })
    }
    catch (error) {
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    productoGet,
    productoPost,
    productoPut,
    productoDelete
}
