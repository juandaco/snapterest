const express = require('express');
const authRouter = express.Router();
const passportTwitter = require('../auth/twitter');
const path = require('path');

// Post authentication Middleware
function popupCloser(req, res) {
  const popCloser = path.resolve('./auth/popup-closer.html');
  if (req.user) {
    res.sendFile(popCloser);
  } else {
    res.json({
      message: 'Not users found',
    });
  }
}

/*
  Twitter
*/
authRouter.get('/twitter', passportTwitter.authenticate('twitter'));
authRouter.get(
  '/twitter/callback',
  passportTwitter.authenticate('twitter'),
  popupCloser
);

module.exports = authRouter;
