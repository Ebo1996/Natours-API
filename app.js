const express = require('express');
const fs = require('fs');

const port = 3000;

const app = express();

app.use(express.json());
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'hello from server side', app: 'Natours' })
// });
// app.post('/', (req, res) => {
//   res.send('you can post to this endpoint too');
// });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  res.send('done')
});
app.listen(port, '127.0.0.1', () => { }); 