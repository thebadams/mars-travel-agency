import { Schema, model } from "mongoose";

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

const User = model<IUser>('User', userSchema);

export default User;