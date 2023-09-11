const {response} =require('express')
const Arriendo =require('../models/arriendo')

const getArriendo=async(req, res=response) => {
    let mensaje=''
    try {
        const arriendos= await Arriendo.find()
        mensaje= arriendos
    } catch (error) {
        mensaje= error
        
    }
    res.json({
        mensaje
    })
}
const postArriendo=async(req, res=response)=>{
    const body= req.query
    let mensaje=''
    const arriendo=new Arriendo(body)
    try {
        await arriendo.save()
        mensaje='arriendo registrado'
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
const putArriendo=async(req, res=response)=>{
    const body= req.query

    let mensaje=''
    try {
    await Arriendo.findOneAndUpdate({direccion:body.direccion}, {TipoMueble: body.TipoMueble, Valor: body.Valor, Ciudad: body.Ciudad})
        mensaje='arriendo Actualizado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
const deleteArriendo=async(req, res=response)=>{
    const body= req.query

    let mensaje=''
    try {
    await Arriendo.findOneAndDelete({direccion:body.direccion}, {TipoMueble: body.TipoMueble, Valor: body.Valor, Ciudad: body.Ciudad})
        mensaje='arriendo Borrado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getArriendo,
    postArriendo,
    putArriendo,
    deleteArriendo

}