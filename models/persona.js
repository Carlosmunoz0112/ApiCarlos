const {Schema, model}= require('mongoose')

const PersonaSchema=Schema({
    TipoDocumento: {
        type: String,
        enum:['CC', 'NET', 'CE'],
        required:[true, "el documento es obligatorio"]
    },
    Documento:{
        unique: true,
        type:Number,
        required:[true, 'el documento es obligatorio']
    },
    Nombre:{
        type:String,
        required:[true, 'el nombre es obligatorio']

    },
    genero:{
        type:String,
        enum:['Masculino', 'Femenino'],
        required:[true, 'El genero es obligatorio']
    },
    fechaNacimiento:{
        type:Date,
        required:[true, 'La fecha de nacimiento es obligatoria'],
        validate:{
            validator: function (fechaNacimiento){
                let fecha= new Date()
                return fechaNacimiento<fecha
            },
            message:'La fecha de nacimiento es mayor a la actual'

        }
    },
    Numero:{
        type:Number,
        required:[true, 'El numero es obligatorio']
    }

})
module.exports=model('Persona', PersonaSchema)