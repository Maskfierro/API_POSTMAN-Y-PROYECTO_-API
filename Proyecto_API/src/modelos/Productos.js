const mongoose = require('mongoose');
const modelo = mongoose.Schema({

    nombre: {
        type: "String",
        require: true
    },

    marca: {

        type: "String",
        require: true
    },

    estado: {
        type: "String",
        require: true
    }

})

module.exports = mongoose.model('Productos', modelo);