const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

// Ensure DB connection before listening
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Failed to connect to the database:', err);
  });