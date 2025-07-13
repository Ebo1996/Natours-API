const express = require('express');
const fs = require('fs');
const app = express();
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
