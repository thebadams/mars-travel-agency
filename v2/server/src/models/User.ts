import { Schema, model, Document, Error } from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	facebookId?: string;
	ticket?: Schema.Types.ObjectId;
	comparePassword: comparePasswordFunction;
}

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => void) => void;


const comparePassword: comparePasswordFunction = function (this: IUser, candidatePassword, cb) {
	const user = this;
	bcrypt.compare(candidatePassword, user.password, (err: Error | undefined, isMatch: boolean) => {
		cb(err, isMatch);
	});
};
const userSchema = new Schema<IUser>({
	email: String,
	firstName: String,
	lastName: String,
	password: String,
	facebookId: String,
	ticket: {
		type: Schema.Types.ObjectId,
		ref: 'Ticket'
	}
})

userSchema.methods.comparePassword = comparePassword;

userSchema.pre('save', function save(next){
	userSchema.pre("save", function save(next) {
		const user = this as IUser;
		if (!user.isModified("password")) { return next(); }
		bcrypt.genSalt(10, (err, salt) => {
			if (err) { return next(err); }
			bcrypt.hash(user.password, salt, (err: Error | undefined, hash) => {
				if (err) { return next(err); }
				user.password = hash;
				next();
			});
		});
	});
})

const User = model<IUser>('User', userSchema);


export default User;