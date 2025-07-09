const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res) => { 
  res.status(200).json({ message: 'hello from server side', app: 'Natours' })
})
app.post('/', (req, res) => {
  res.send('you can post to this endpoint too');
})
app.listen(port, '127.0.0.1', () => { }); 