const express = require('express')
const Router = express.Router();
const modProducts = require('../modelos/Productos');

Router.post('/productos', async (req, res) => {

    const newProducts = new modProducts({nombre: req.body.nombre, marca: req.body.marca, estado: req.body.estado})
    const saveProducts = await newProducts.save();

    res.json(console.log(saveProducts));

})

Router.get('/verpro', async (req, res) => {

    const verPro = await modProducts.find()
    res.json(verPro)

})

Router.get('/verpro/:id', async (req, res) => {

    const verPro = await modProducts.findById()
    res.json(verPro)

})


Router.delete('/borrar/:id', async (req, res) => {

    const deletePro = await modProducts.findByDeleteId()
})

module.exports = Router;