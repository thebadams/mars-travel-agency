import { Schema, model, Document, Error } from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	facebookId?: string;
	ticket?: Schema.Types.ObjectId;
}

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