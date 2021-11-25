import { Schema, model } from "mongoose";

export interface IUser {
	email: string;
	firstName: string;
	lastName: string;
	facebookId?: string
}

const userSchema = new Schema<IUser>({
	email: String,
	firstName: String,
	lastName: String,
	facebookId: String
})

const User = model<IUser>('User', userSchema);

export default User;