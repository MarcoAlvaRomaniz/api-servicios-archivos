//llamando express nuevamente
const express = require("express");
//Llamado del metodo router
const router = express.Router();
//crear instancia para multer en los casos en los que no hay archivos para llamar
//llamado del multer
// const multer = require('multer');
// const uploadNone = multer();
//rutas para la funcion
router.get('/',(req,res)=>{
    res.send("Hola Cuates");
});
module.exports = router;