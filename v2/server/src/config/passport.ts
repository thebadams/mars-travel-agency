import passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';

import User, { IUser } from '../models/User';
import { NativeError } from 'mongoose'

passport.serializeUser<any, any>((req, user, done) => {
	done(undefined, user);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err: NativeError, user: IUser) => done(err, user));
});

passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
	User.findOne({ email: email.toLowerCase() }, (err: NativeError, user: IUser) => {
		if (err) { return done(err); }
		if (!user) {
			return done(undefined, false, { message: `Email ${email} not found.` });
		}
		user.comparePassword(password, (err: Error, isMatch: boolean) => {
			if (err) { return done(err); }
			if (isMatch) {
				return done(undefined, user);
			}
			return done(undefined, false, { message: "Invalid email or password." });
		});
	});
}));

export default passport