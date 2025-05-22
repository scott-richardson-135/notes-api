const { DataTypes } = require('sequelize');

//exports a function that takes in our sequelize instance and creates a new note
module.exports = (sequelize) => 
    sequelize.define('Note', {
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        encryptedContent: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });