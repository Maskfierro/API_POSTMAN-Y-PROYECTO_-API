const mongoose = require('mongoose'); // Se importa el modulo "mongoose" para vincular la base de datos
const PostSchema = mongoose.Schema({ // Define la estructura de los datos que se guardaran

    usuario:{ // Nombres de los campos en el esquema
        type: String, // Tipo de dato que se va a almacenar
        require: true // Dice que es obligatorio llenar este campo
    },
    correo:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true
    },
    numero:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Users', PostSchema); //Se exporta el modelo con el nombre "users" para que se reutilice