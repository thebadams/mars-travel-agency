import { Schema, model, PassportLocalSchema, PassportLocalDocument, PassportLocalErrorMessages, PassportLocalModel } from "mongoose";
import passportLocalMongoose from'passport-local-mongoose'

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	facebookId?: string;
	ticket?: Schema.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
	email: String,
	firstName: String,
	lastName: String,
	facebookId: String,
	ticket: {
		type: Schema.Types.ObjectId,
		ref: 'Ticket'
	}
})

userSchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
})

const User: PassportLocalModel<PassportLocalDocument> = model<IUser  PassportLocalDocument>('User', userSchema as PassportLocalSchema);

export default User;