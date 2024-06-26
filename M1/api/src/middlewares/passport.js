const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "Ov23lixvmjNoLLvJh1AG";
const GITHUB_CLIENT_SECRET = "9653887fabbd01fe1b8834769ee403cd9e9a5ec5";
const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback";

const passportOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
};

// Serialization and Deserialization functions (required for persistent sessions)
passport.serializeUser(function (user, done) { 
  console.log("serializeUser: ", user);
  done(null, user); 
});
passport.deserializeUser(function (user, done) { 
  console.log("deserializeUser: ", user);
  done(null, user); 
});

console.log("passportOptions: ", passportOptions);
  
passport.use( 
  new GitHubStrategy(passportOptions,
    function ( accessToken, refreshToken, profile, done ) {
    /* FLOW #3 : accessToken and refreshToken are self explanatory;
    profile is the json result from GitHub which contains helpful information like id, username, mail, etc...
    We can decide to use profile.id as an internal UserID;
    Here we can call the database and check if the user already exists and create a new record if not.
    */
    console.log("accessToken: ", accessToken);
    profile.token = accessToken;
    return done(null, profile);
    })
   );

module.exports = passport;