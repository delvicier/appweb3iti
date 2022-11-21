const express = require ('express');
const bodyParser = require ('body-parser');
const router = require ('./components/message/network');
const dotenv = require ('dotenv');

dotenv.config();

var app = express();
app.use(bodyParser.json());
app.use(router);


app.listen(process.env.PUERTO, () => {
    console.log('Servidor corriendo en puerto: ' +process.env.PUERTO);
});