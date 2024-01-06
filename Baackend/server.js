const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const cors = require('cors');

const githubUsers = {};

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/OpenGalaxy?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User model
const User = mongoose.model('User', new mongoose.Schema({
  githubId: String,
  username: String,
  displayName: String,
}));

// Configure GitHub strategy for Passport
passport.use(new GitHubStrategy({
  clientID: 'af274aebeef6ccbf2260',
  clientSecret: '844fa12d9b3384f637d9d0de8b3cf87700fec991',
  callbackURL: 'http://localhost:3000/auth/github/callback',
},
async (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in the database
  let user = await User.findOne({ githubId: profile.id });
    console.log(profile);
    
    if(githubUsers[profile.username] === undefined){
        githubUsers[profile.username] = profile;
    }
    
    console.log('added '+githubUsers[profile.username]);
    // req.session.profile = profile;
  if (!user) {
    // Create a new user if not found
    user = new User({
      githubId: profile.id,
      username: profile.username,
      displayName: profile.displayName,
    });
    console.log(user);
    await user.save();
  }

  return done(null, user);
}));

// Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

app.use(cors({
    origin : ['http://localhost:5173'],
}));

app.use(express.json());

// Configure Express to use Passport and sessions
app.use(session({ secret: 'your-session-secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: 'http://localhost:5173/failed' }),
  (req, res) => {
    // res.redirect('http://localhost:5173');
    res.redirect('http://localhost:5173/authenticated/' + req.user.username);
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/user/:username', (req, res) => {
    console.log('user : ' +githubUsers[req.params.username]);
    if (githubUsers[req.params.username]) {
        res.json(githubUsers[req.params.username]);
    } else {
        res.status(401).send('Not authenticated');
    }
});

app.get('/', (req, res) => {
  res.send(req.isAuthenticated() ? `<p>Hello, ${req.user.displayName}! <a href="/logout">Logout</a></p>` : '<p>Hello, guest! <a href="/auth/github">Login with GitHub</a></p>');
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
