require('dotenv').config();

const {
  POSTGRES_DATABASE,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_LOCALHOST,
  POSTGRES_DIALECT,
} = process.env;

module.exports = {
  development: {
    database: POSTGRES_DATABASE,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_LOCALHOST,
    dialect: POSTGRES_DIALECT,
  },
};
