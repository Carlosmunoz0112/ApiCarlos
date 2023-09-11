const {Router}=require('express')

const route= Router()

const {getPersona,postPersona,putPersona,deletePersona}=require('../controllers/persona')

route.put('/',putPersona)
route.delete('/',deletePersona)

route.get('/',getPersona)

route.post('/',postPersona)

module.exports=route