const express = require('express');
const usersRouter = express.Router();
const Users = require('../models/users');

usersRouter.get('/current', function(req, res, next) {
  if (req.isAuthenticated()) {
    Users.findById({ _id: req.user._id }, function(err, user) {
      if (err) throw err;
      res.json({
        message: 'User',
        user,
      });
    });
  } else {
    res.json({
      errorMsg: 'You are not logged in!',
    });
  }
});

usersRouter.get('/logout', function(req, res, next) {
  if (req.isAuthenticated()) {
    req.logout();
    res.json({
      message: 'Sorry to see you go!!!',
    });
  } else {
    res.json({
      errorMessage: 'You are not logged in!',
    });
  }
});

module.exports = usersRouter;
