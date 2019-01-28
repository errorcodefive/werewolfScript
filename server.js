//Server side
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

require('dotenv').config();

var port_number = process.env.PORT || 3000;
var dist_path = path.join(__dirname, 'client/dist');

console.log("Express using: " + dist_path);

app.use(express.static(dist_path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Send all other GET requests to the homepage
app.get('*',  (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports= app.listen(port_number, function(){
    console.log('App started on port:', port_number);
})
