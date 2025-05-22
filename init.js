const { sequelize } = require('./models');

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected");
        await sequelize.sync({ alter: true });
        console.log("Models synced");
        process.exit();
    } catch (err) {
        console.error("Error connecting", err);
        process.exit(1);
    }
})();