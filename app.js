const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => { 
  res.status(200).json({ message: 'hello from server side', app: 'Natours' })
})
app.post('/', (req, res) => {
  res.status(200).json({ message: 'hello from server side', app: 'Natours' })
})
app.listen(port, '127.0.0.1', () => { }); 