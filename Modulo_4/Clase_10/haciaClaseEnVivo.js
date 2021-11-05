const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Servidor Arriba'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/404',function(req,res){
    res.send('Error página no encontrada');
});