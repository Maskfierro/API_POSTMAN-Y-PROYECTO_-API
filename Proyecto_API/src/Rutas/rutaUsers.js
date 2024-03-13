const express = require('express'); 
const Router = express.Router(); //Se crea un nuevo enrutador
const Users = require('../modelos/Users'); // Se importa el modelo se la base de datos

//Ruta para crear un nuevo usuario
Router.post('/crearus', async (req, res) => {
    //Se crea una constante en la cual se almacenaran los datos de la base de datos y el postman con la siguiente estructura
    const newUsers = new Users({usuario: req.body.usuario,correo: req.body.correo,contraseña: req.body.contraseña,numero: req.body.numero})
    //Se hace una constante la cual guarda esos datos 
    const userSave =  await newUsers.save();
    //los datos guardados anteriormente se mostraran llamando a la constante
    res.status(201).json(userSave);
});
//Obtener Usuarios
Router.get('/verus', async (req, res) => {
    //se guardara en una constante todos los datos de la base de datos con "User.find()" 
    const listaUs = await Users.find();
    //Se mostraran la lista de usuarios
    res.json(listaUs);
});
//Obtener Usuarios por id
Router.get('/verus/:id', async (req, res) => {//Se necesita "/:id" para mostrar un usuario por su ID
    //Constante que guarda y busca todos los datos de la base de datos por su id con "findById(req.params.id)"
    const verid = await Users.findById(req.params.id);
    res.json(verid);

});
//Actualizar Usuarios
Router.patch('/actualizarus/:id', async (req, res) => {
    //la constante guarda el metodo "findByIdAndUpdate(req.params.id, req.body,{new:true}) el cual sera para actualizar algun dato"
    const Actualizarus = await Users.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(Actualizarus);
});
//eliminar Usuarios
Router.delete('/eliminarus/:id', async (req, res) => {
    //se utiliza el metodo "findByIdAndDelete" para eliminar un usuario por su id
    await Users.findByIdAndDelete(req.params.id);
    //No se devolvera nada

});
module.exports = Router;