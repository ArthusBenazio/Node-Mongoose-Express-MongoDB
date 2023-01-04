const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

//DB Connection
const conn = require('./db/conn');

conn();

const routes = require('./routes/router');

app.use('/api', routes);

const PORT = 5000;

app.listen(PORT, function() {
  console.log(`Servidor is run in the port ${PORT}`)
});