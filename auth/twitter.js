require('dotenv').config();
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/user');
const passportUserSetup = require('./passportUserSetup');

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL,
    },
    function(token, tokenSecret, profile, done) {
      const searchQuery = {
        twitterID: profile.id,
      };

      let profilePicture;
      if (Array.isArray(profile.photos) && profile.photos[0]) {
        profilePicture = profile.photos[0].value || '';
      }
      // Customize your User
      const updates = {
        twitterID: profile.id,
        username: profile.username,
        profilePicture,
      };

      const options = {
        upsert: true,
        setDefaultsOnInsert: true,
      };

      // update the user if s/he exists or add a new user
      User.findOneAndUpdate(searchQuery, updates, options, function(
        err,
        user
      ) {
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
