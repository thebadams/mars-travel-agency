import { Schema, model } from "mongoose";

export interface IUser {
	email: string

}

const userSchema = new Schema<IUser>({
	email: String
})

const User = model<IUser>('User', userSchema);

export default User;