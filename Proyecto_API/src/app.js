const express = require('express'); //Se importa el modulo express para procesar
const path = require('path'); //se importa la funcion "path" para realizar por mostrar la ruta del archivo
const mongoose = require('./database.js')// Se importa el modulo mongoose para la base de datos
const bodyparser = require('body-parser') //Se importa este modulo body-parser para solicitudes HTTP
//-------------------------------
//Se importaran las rutas
const crearus = require('./Rutas/rutaUsers.js')
const obtenerus = require('./Rutas/rutaUsers.js')
const obtenerIdus = require('./Rutas/rutaUsers.js')
const Actualizarus = require('./Rutas/rutaUsers.js')

const Productos = require('./Rutas/rutaProductos.js')

const app = express(); //se crea una variable llamada "app" y se almacena en la instancia creada "express()"

//Crear Usuarios
app.use(bodyparser.json()); //se llama a este metodo para analizar solicitudes en formato JSON
app.use('/', crearus);  // Se llaman las rutas con el enlace que esta en "rutaUsers.js"
app.use('/', obtenerus); 
app.use('/', obtenerIdus); 
app.use('/', Actualizarus);
//Crear Productos
app.use('/', Productos);

app.get('/inicio', (req, res) => { // Se utilizara el metodo Get
    res.sendFile(path.join(__dirname + "/componentes/index.html" )); /*Se utiliza el parametro "res" y "sendFile" 
    para mostrar la direccion en donde esta el archivo, tambien se utiliza _dirname para esta misma ubicacion*/
});

app.listen(1000); //se configura el listening del servidor (se precisa el puerto en donde se escuchara)
