
//importar las rutas
const routerAPI = require('./routers/index.js');
//Llamado de espress
const express = require('express');
const app = express();
const port = 5000;
//manejo de archivos fs
const fs = require('fs');
//variable para envio de información
const {send} = require('process');
const server = require('http').Server(app);
//Llamado de cors
const cors = require('cors');
//manejador de errores
const {logErrors, errorHandler} = require('./middleware/error.handler');
const {log} = require('console');
app.use(cors());
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
routerAPI(app);
//inicio de estaticos para poder renderizar los archivos de imagen
app.use('uploads',express.static('uploads'));
//Inicio del servidor
app.listen(port,()=>{
    console.log(`servidor escuchando en http://localhost:${port}`);
});