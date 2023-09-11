const {response} =require('express')
const Persona =require('../models/persona')


const getPersona = async (req, res = response) => {
    try {
      const personas = await Persona.find();
      let sumaEdades = 0;
  
      personas.forEach((persona) => {
        const fechaNacimiento = new Date(persona.fechaNacimiento);
        const edad = calcularEdad(fechaNacimiento);
        sumaEdades += edad;
      });
  
      const promedioEdad = sumaEdades / personas.length;
  
      res.json({
        mensaje: personas,
        promedioEdad: promedioEdad,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: error.message,
      });
    }
  };
  
  function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
const postPersona=async(req, res=response)=>{
    const body= req.query
    let mensaje=''
    const persona=new Persona(body)
    try {
        await persona.save()
        mensaje='Persona registrada'
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
const putPersona=async(req, res=response)=>{
  const body= req.query
  let mensaje=''
  try {
      await Persona.findOneAndUpdate({Documento:body.Documento}, {Nombre:body.Nombre, fechaNacimiento:body.fechaNacimiento, Numero:body.Numero})
      mensaje='Persona Actualizada'
  } catch (error) {
      mensaje='Error'
      
  }
  res.json({
      mensaje
  })
}
const deletePersona=async(req, res=response)=>{
  const body= req.query
  let mensaje=''
  try {
      await Persona.findOneAndDelete({Documento:body.Documento}, {Nombre:body.Nombre, fechaNacimiento:body.fechaNacimiento, Numero:body.Numero})
      mensaje='Persona Borrada'
  } catch (error) {
      mensaje='Error'
      
  }
  res.json({
      mensaje
  })
}

module.exports={
    getPersona,
    postPersona,
    putPersona,
    deletePersona
    
}