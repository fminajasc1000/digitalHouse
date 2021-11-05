const express = require('express');
const app = express();

let producto={
    tipoProducto : null,
    precio : null,
    cantidad : null
}
// Escribir tu código aquí
app.listen(8000, () => console.log('Servidor Arriba'));

app.get('/producto/agregar',function(req,res){
    res.send(producto);
});
