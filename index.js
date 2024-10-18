const express = require('express');
const app = express();
const { sequelize } = require('./models/');
const { registerRoutes } = require('./routes/index.js');
// const { testDbConnection } = require('./config/database.js');
// testDbConnection();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', require(''));

const startServer = async function () {
	try {
		await sequelize.authenticate();
		console.log('database connected');

		// const serverPort = process.env.PORT || 3000;
		// app.listen(serverPort);
		// console.log(`--- Server started on ${serverPort} ---\n\n`);
	} catch (err) {
		// console.log('server setup failed', err);
		console.log('Database connection failed', err);

		console.log('Error: ', err.message);
	}
};

startServer();
registerRoutes(app);

app.listen(PORT, () => {
	console.log(`server running on port http://localhost:${PORT}`);
});
