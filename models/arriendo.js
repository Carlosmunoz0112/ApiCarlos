const {Schema, model}=require('mongoose')

const ArriendoSchema=Schema({
    direccion: {
        type: String,
        unique:true,
        required:[true, 'la direccion es obligatoria']
    },
    TipoMueble:{
        type: String,
        enum: ['Apartamento', 'Casa', 'Local'],
        required: [true, 'El tipo es obligatorio']
    },
    Valor: {
        type: Number,
        required: [true,'El valor es obligatorio'],

        validate: {
            validator: function(valor){
                return valor>=800000 && valor<=4000000
            },
            message: 'EL valor debe estar entre 800.000 y 4.000.000'

        }
    },
    Ciudad: {
        type: String,
        enum: ['Medellin', 'Cali', 'Bogota'],
        required: [true, 'La ciudad es obligatoria']
    }
})
module.exports=model('Arriendo', ArriendoSchema)