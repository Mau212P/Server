// Importar los módulos necesarios
const express = require('express');
const path = require('path');
require('dotenv').config();

// Crear la aplicación de Express
const app = express();

// Configurar las rutas de tu proyecto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
    res.send("Hola mundo :P");
});
// Definir el puerto
const PORT = process.env.PORT || 8000;

// Configurar la escucha de las peticiones
app.listen(PORT, () => {
    console.log('Escuchando en el puerto ${PORT}');
});
