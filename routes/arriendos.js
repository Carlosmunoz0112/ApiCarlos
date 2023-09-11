const {Router}=require('express')

const route= Router()

const {getArriendo,postArriendo,putArriendo, deleteArriendo}=require('../controllers/arriendo')

route.get('/',getArriendo)

route.put('/',putArriendo)

route.post('/',postArriendo)

route.delete('/',deleteArriendo)

module.exports=route