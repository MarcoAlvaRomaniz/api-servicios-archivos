//llamado de express para el servidor
const express = require("express");
//importacion de las rutas
const serviciosRouter = require('./servicios.router.js');
function routerAPI(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/servicios',serviciosRouter);
}

//exportacion de la funcion
module.exports = routerAPI;