const express = require("express");
const app = express();
const { testDbConnection } = require('./config/database.js');
const dotenv = require("dotenv");
dotenv.config();

testDbConnection();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', require(''));


// const { Client } = require('pg')
// const client = new Client({
//   user: 'sgpostgres',
//   host: 'SG-PostgreNoSSL-14-pgsql-master.devservers.scalegrid.io',
//   database: 'postgres',
//   password: 'password',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

// });

app.listen(PORT, () => {
	console.log(`server running on port http://localhost:${PORT}`);
});

