import User, {IUser}  from './User';
import {Document} from 'mongoose';

describe('User Model', () => {
	let newUser: Document<IUser>;
	beforeAll(() => {
		newUser = new User({
			email: 'test@test.com'
		});
	})
	describe('User Model Properties', () => {
		test('User Should Have an _id Property', () => {
			expect(newUser).toHaveProperty('_id');
		})
		test('User Should have an email Property that is the String "test@test.com"', () => {
			expect(newUser).toHaveProperty('email', 'test@test.com');
		});
		test.todo('User Should Have a firstName Property, that is the string, "John"')
		test.todo('User Should Have A lastName Property, that is the String, "Doe"')
		test.todo('User Should Have a facebookId property, that is the String "FACEBOOK_ID"');
		test.todo('User Should Have a Ticket Property, that references a Ticket');
	})
})