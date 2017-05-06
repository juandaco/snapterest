require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const Users = require('../models/users');
const passportUserSetup = require('./passportUserSetup');

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
      const searchQuery = {
        id: profile.id
      };

      // Customize your User
      const updates = {
        username: profile.username,
        name: profile.displayName,
        id: profile.id,
      };

      const options = {
        upsert: true,
        setDefaultsOnInsert: true
      };

      // update the user if s/he exists or add a new user
      Users.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
        if (err) {
          return done(err);
        } else {
          return done(null, user);
        }
      });
    }
  )
);

// serialize user into the session
passportUserSetup();

module.exports = passport;
