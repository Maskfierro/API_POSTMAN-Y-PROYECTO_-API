const mongoose = require("mongoose"); //se importa el modulo con el cual se conectara la base de datos

mongoose.connect("mongodb://localhost:27017/API_REACT")//se conecta mediante la URL del servidor de mongodb

.then(() => console.log("La base de datos está conectada")) // al conectar se mostrara este mensaje
.catch(error => console.error("Error al conectar a la base de datos:")); // y si no esta conectada mostrara este error

module.exports = mongoose;