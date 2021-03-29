'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/logger.js');
const validator = require('./middlewares/validator.js');
const app = express();

app.use(express.json());
app.use(logger);
// http://localhost:3000/person?name=ruba
app.get('/person', validator, (req, res) => {
  const output = {
    name: req.query.name,
  };
  res.json(output);
});


// app.get('/bad', (req, res) => {
//     throw new Error('something went wrong');
//   })

// app.get('/foo', (req, res, next) => {
//   next('something wrong!!');
// });


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};