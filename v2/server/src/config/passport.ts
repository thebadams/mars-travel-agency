import passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/User';

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

export default passport