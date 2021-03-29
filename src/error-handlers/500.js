'use strict';


module.exports = (err,req, res,next) => {
  res.status(500).json({
    error: 500,
    route: req.path,
    message: 'Error in server',
  });
};