const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')));

// app.get('/', (req, res) => res.status(200).send('llets get cool shit in here'));
// app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));
/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
