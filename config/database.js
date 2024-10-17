const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv").config();

const test = {
  name: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  pass: process.env.POSTGRES_PASSWORD
}

console.log(test);

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE , process.env.POSTGRES_USERNAME , process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});


const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: sequelize, testDbConnection };