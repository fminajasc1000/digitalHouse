const express = require('express');
const app = express();

// Escribir tu código aquí
app.listen(8000, () => console.log('Servidor Arriba'));

app.get('/home',function(req,res){
    res.send('Hola, estamos en el home');
});
