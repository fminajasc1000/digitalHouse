const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

// Escribir tu código aquí
app.listen(8000, () => console.log('Servidor Arriba'));

app.get('/perfil',function(req,res){
    res.send(saludo);
});
