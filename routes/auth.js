const express = require('express');
const authRouter = express.Router();
const passportGithub = require('../auth/github');
const passportTwitter = require('../auth/twitter');
const passportFacebook = require('../auth/facebook');
const passportGoogle = require('../auth/google');
const path = require('path');

// Post authentication Middleware
function popupCloser(req, res) {
  if (req.user) {
    const popCloser = path.resolve('./auth/popup-closer.html');
    res.sendFile(popCloser);
  } else {
    res.json({
      message: 'Not users found'
    });
  }
}

/*
  Github
*/
authRouter.get('/github', passportGithub.authenticate('github'));
authRouter.get(
  '/github/callback',
  passportGithub.authenticate('github'),
  popupCloser
);

/*
  Twitter
*/
authRouter.get('/twitter', passportTwitter.authenticate('twitter'));
authRouter.get(
  '/twitter/callback',
  passportTwitter.authenticate('twitter'),
  popupCloser
);

/*
  Facebook
*/
authRouter.get('/facebook', passportFacebook.authenticate('facebook'));
authRouter.get(
  '/facebook/callback',
  passportFacebook.authenticate('facebook'),
  popupCloser
);

/*
  Google
*/
authRouter.get(
  '/google',
  passportGoogle.authenticate('google', { scope: ['profile'] })
);

authRouter.get(
  '/google/callback',
  passportGoogle.authenticate('google'),
  popupCloser
);

module.exports = authRouter;
