//APP DE EXPRESS PARA LA GESTION DE LAS RUTAS
const express=require('express');

//CREACION DE LA APP
const app= express();

//RUTAS
app.use('/api', require ('./routes/api'));


module.exports=app;