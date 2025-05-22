const { DataTypes } = require('sequelize');

//exports a function that takes in our sequelize instance and creates a new user
module.exports = (sequelize) =>
    sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true, 
            allowNull: false,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });