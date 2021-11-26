import { Schema, model } from "mongoose";

export interface IUser {
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

userSchema.pre('save', (next) => {
	
})

const User = model<IUser>('User', userSchema);


export default User;