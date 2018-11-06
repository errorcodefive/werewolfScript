var Sequelize= require('sequelize');

var sequelize = new Sequelize(process.env.PG_URI);

sequelize
    .authenticate()
    .then(()=>{
        console.log("Connection to postgres established");
    })
    .catch(err=>{
        console.log("Unable to connect to db:",err);
    })