const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');
//1)MIDDLEWARE
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//2)ROUTE HANDLER

// Get all tours
const getAllTours = (req, res) => { 
  console.log(req.requestTime)
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

// Get a tour
const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; // convert string to number
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tours: tour,
    },
  });
};

// Create a tour
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  /*
    (path, data, callback)
    ✔ JSON.stringify(tours) ➔ becomes a JSON string.
    ✔ fs.writeFile(...) ➔ writes that string into the file on disk at the given path.
  */
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
const getAllUsers    
// 3)Routes
app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/tours/:id')
  .get(getAllUsers)
  .post(createUser)
app.route('/api/v1/tours/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
//4)START SERVER
const port = 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});


