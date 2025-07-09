const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => { 
  res.send('Hello, World!');
})
app.listen(port, '127.0.0.1', () => { });