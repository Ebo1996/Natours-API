const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');

// 1) MIDDLEWARE
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


// 2) ROUTE HANDLER



// User route handlers (placeholders)


// 3) ROUTES



// 4) START SERVER
const port = 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});




