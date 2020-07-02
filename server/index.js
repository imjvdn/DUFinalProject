const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const mongoose = require('mongoose');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const TwitchStrategy = require('passport-twitch.js').Strategy;
const keys = require('../config');
const chalk = require('chalk');
const Plan = require('../client/src/models/plan');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/finalproject',
  { useNewUrlParser: true },
  function (err) {
    if (err) {
      console.err(err);
    } else {
      console.log('Connected');
    }
  }
);

let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: '/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

// Amazon Strategy
passport.use(
  new AmazonStrategy(
    {
      clientID: keys.AMAZON.clientID,
      clientSecret: keys.AMAZON.clientSecret,
      callbackURL: '/auth/amazon/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };

      console.log(profile.id);

      console.log(Plan);

      Plan.findOne({ username: profile.id }, (err, user) => {
        console.log('Anything you want');
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          console.log('User already exists', user);
          return cb(null, profile);
        } else {
          const newUser = new Plan({
            displayname: profile.displayName,
            email: profile.emails[0].value,
            username: profile.id,
          });
          console.log('New User', newUser);
          newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return cb(null, profile);
          });
        }
      });
    }
  )
);

// Github Strategy
// passport.use(
//   new GithubStrategy(
//     {
//       clientID: keys.GITHUB.clientID,
//       clientSecret: keys.GITHUB.clientSecret,
//       callbackURL: '/auth/github/callback',
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log(chalk.blue(JSON.stringify(profile)));
//       user = { ...profile };
//       return cb(null, profile);
//     }
//   )
// );

passport.use(
  new GithubStrategy(
    {
      clientID: keys.GITHUB.clientID,
      clientSecret: keys.GITHUB.clientSecret,
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };

      console.log(profile.id);

      console.log(Plan);

      Plan.findOne({ username: profile.id }, (err, user) => {
        console.log('Anything you want');
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          console.log('User already exists', user);
          return cb(null, profile);
        } else {
          const newUser = new Plan({
            displayname: profile.displayName,
            email: profile.emails[0].value,
            username: profile.id,
          });
          console.log('New User', newUser);
          newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return cb(null, profile);
          });
        }
      });
    }
  )
);

// Google Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.GOOGLE.clientID,
//       clientSecret: keys.GOOGLE.clientSecret,
//       callbackURL: '/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log(chalk.blue(JSON.stringify(profile)));
//       user = { ...profile };
//       return cb(null, profile);
//     }
//   )
// );

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };

      console.log(profile.id);

      console.log(Plan);

      Plan.findOne({ username: profile.id }, (err, user) => {
        console.log('Anything you want');
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          console.log('User already exists', user);
          return cb(null, profile);
        } else {
          const newUser = new Plan({
            displayname: profile.displayName,
            email: profile.emails[0].value,
            username: profile.id,
          });
          console.log('New User', newUser);
          newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return cb(null, profile);
          });
        }
      });
    }
  )
);

// Instagram Strategy
passport.use(
  new InstagramStrategy(
    {
      clientID: keys.INSTAGRAM.clientID,
      clientSecret: keys.INSTAGRAM.clientSecret,
      callbackURL: '/auth/instagram/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

// Spotify Strategy
passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.SPOTIFY.clientID,
      clientSecret: keys.SPOTIFY.clientSecret,
      callbackURL: '/auth/spotify/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

// Twitch Strategy
passport.use(
  new TwitchStrategy(
    {
      clientID: keys.TWITCH.clientID,
      clientSecret: keys.TWITCH.clientSecret,
      callbackURL: '/auth/twitch/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };

      const { username, email } = req.body;
      // ADD VALIDATION
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          console.log('User.js post error: ', err);
        } else if (user) {
          return cb(null, profile);
        } else {
          const newUser = new User({
            displayname: profile.displayName,
            email: profile.emails[0].value,
            username: profile.username,
          });
          newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return cb(null, profile);
          });
        }
      });
    }
  )
);

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get(
  '/auth/amazon',
  passport.authenticate('amazon', {
    scope: ['profile'],
  })
);
app.get(
  '/auth/amazon/callback',
  passport.authenticate('amazon'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/auth/github', passport.authenticate('github'));
app.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/auth/instagram', passport.authenticate('instagram'));
app.get(
  '/auth/instagram/callback',
  passport.authenticate('instagram'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/auth/spotify', passport.authenticate('spotify'));
app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/auth/twitch', passport.authenticate('twitch.js'));
app.get(
  '/auth/twitch/callback',
  passport.authenticate('twitch.js'),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/user', (req, res) => {
  console.log('getting user data!');
  res.send(user);
});
console.log('a');
app.get('/auth/logout', (req, res) => {
  console.log('logging out!');
  user = {};
  res.redirect('/');
});
console.log('b');
console.log(`${process.env.NODE_ENV},Hello, 237`);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

if (process.env.NODE_ENV === 'production') {
  const privateKey = fs.readFileSync(
    '/etc/letsencrypt/live/learnpassportjs.com/privkey.pem',
    'utf8'
  );
  const certificate = fs.readFileSync(
    '/etc/letsencrypt/live/learnpassportjs.com/cert.pem',
    'utf8'
  );
  const ca = fs.readFileSync(
    '/etc/letsencrypt/live/learnpassportjs.com/chain.pem',
    'utf8'
  );
  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
  };

  https.createServer(credentials, app).listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
  http
    .createServer(function (req, res) {
      res.writeHead(301, {
        Location: 'https://' + req.headers['host'] + req.url,
      });
      res.end();
    })
    .listen(80);
  console.log('Express listening on port 80');
} else {
  app.listen(5000);
  console.log('Express listening on port 5000');
}
