//CREAMOS Y LEVANTAMOS EL SERVER
const http = require ('node:http');

const app=require ('./src/app');

//Config .env
require('dotenv').config();

//Config DB
require('./src/config/db');

const server=http.createServer(app);

const PORT=process.env.PORT || 3000;
server.listen(PORT, ()=> {
 console.log(`Servidor arrancado en puerto ${PORT}`);
});