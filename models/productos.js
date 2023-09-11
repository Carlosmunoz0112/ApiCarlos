const {Schema, model} = require('mongoose')

const productosSchema = Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre del producto es obligatorio']
    },

   categoria: {
        type: String,
        unique: false,
        required: [true, 'El nombre de la categoria del producto es obligatorio']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },

    precio: {
        type: int,
        required: [true, 'El precio es obligatorio'],
       unique: false
    },

    cantidad: {
        type: int,
        required: [true, 'La cantidad es obligatoria'],
       unique: false
    },
    descripcion: {
        type: String,
        unique: false,
        required: [true, 'la descripcion es obligatoria']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },

    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    }
})

//Exportar la función UsuarioSchema
module.exports = model('productos',productosSchema)

