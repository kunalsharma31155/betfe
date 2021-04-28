const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'./dist/client'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname+'./dist/client/index.html')),
);
var PORT = process.env.PORT || 5000;

app.listen( PORT,err=>{
    if(err){console.log(err);}
    console.log(`Server Started On Portt : ${process.env.PORT}`);
}) 