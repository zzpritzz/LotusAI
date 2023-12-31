const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: require("pg"),
  pool: {
    idle: 0,
  },
});
module.exports = async () => {
  try {
    await sequelize.authenticate();
    // console.log("Connection has been established successfully.");
  } catch (error) {
    throw error;
  }
};
