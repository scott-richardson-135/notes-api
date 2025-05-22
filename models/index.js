const { Sequelize } = require('sequelize');
require('dotenv').config();

//create sequelize instance used to define tables and connect to database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
    }
);

//load models
const User = require('./User')(sequelize);
const Note = require('./Note')(sequelize);

//Define relations
User.hasMany(Note, { foreignKey: 'userID', onDelete: 'CASCADE' })
Note.belongsTo(User, { foreignKey: 'userID' })

module.exports = {
    sequelize,
    User,
    Note,
};