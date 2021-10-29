const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Servidor Arriba'));

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'views/home.html'));
});
