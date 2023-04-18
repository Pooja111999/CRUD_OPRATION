const express = require('express');
const app = express();
const sequelize = require('sequelize')
const db = require('./model/usertable');
const bodyParser = require('body-parser');


const path = require('path');

app.use(express.static('view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require('./Router/routes'))

//  db.sync({force:true})

app.listen(3000,()=>{
    console.log('server is running');

})