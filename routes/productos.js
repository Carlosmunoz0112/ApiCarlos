const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {productosGet, productosPost, productosPut, productosDelete} = require('../controllers/productos')

route.get('/', productosGet) //Listar Datos

route.post('/', productosPost) //Insertar Datos

route.put('/', productosPut) //Modificar Datos

route.delete('/', productosDelete) //Eliminar Datos

module.exports = route;


