const path = require('path');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/about-us.html'));
});