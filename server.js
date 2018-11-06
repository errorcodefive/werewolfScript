//Server side
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port_number = process.env.PORT || 3000;

console.log("using: " + __dirname+'/dist');
app.use(express.static(__dirname+'/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*',  (req,res)=>{
    res.sendFile(path.resolve(__dirname, '/dist/index.html'));
});

module.exports= app.listen(port_number, function(){
    console.log('App started on port:', port_number);
})
