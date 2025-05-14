import express from 'express';
import passport from '../utils/Passport.js';
import { loginOrRegisterOAuthUser } from '../controllers/user.controller.js';

const router = express.Router();

// step 1 shows user the profiles available
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// once user selects the profile gets redirected to this
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  loginOrRegisterOAuthUser
);

router.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.redirect('/');
  });
});

export default router;
