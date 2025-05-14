import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// use when using sessions but here we are using JWT only
// import { User } from '../models/user.model.js';

// passport.serializeUser((user, done) => {
//   done(null, user._id); // serialize by DB ID
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id); // You might want to move this to controller too
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });

// callback middleware
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  return done(null, profile); // don't do DB ops here
}));


export default passport;
