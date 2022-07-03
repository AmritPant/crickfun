const express = require('express');
const morgan = require('morgan');

const teamRouter = require('./routes/teamRoute');
const playerRouter = require('./routes/playerRoute');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/', teamRouter);
app.use('/api/v1/', playerRouter);

app.get('/', (req, res) => {
  res.send('<h1> Hello </h1>');
});

module.exports = app;
