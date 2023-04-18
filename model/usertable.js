const  Sequelize = require('sequelize');

const sequelize = require('./database');

const User = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false

    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }

});
module.exports=User;