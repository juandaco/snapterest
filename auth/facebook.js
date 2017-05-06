require('dotenv').config();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const Users = require('../models/users');
const passportUserSetup = require('./passportUserSetup');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: [
        'id',
        'name',
        'displayName',
        'email'
      ]
    },
    function(accessToken, refreshToken, profile, done) {
      const searchQuery = {
        id: profile.id
      };

      // Customize your User
      const updates = {
        username: profile.name.givenName,
        name: profile.displayName,
        id: profile.id
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
