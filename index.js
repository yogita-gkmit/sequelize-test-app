const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', require(''));

app.listen(PORT, () => {
	console.log(`server running on port http://localhost:${PORT}`);
});

const a = 2;
