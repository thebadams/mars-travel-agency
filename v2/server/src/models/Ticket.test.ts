import Ticket, {ITicket} from './Ticket';
import {Document, Error} from 'mongoose'

describe('Ticket Model', () => {
	let newTicket: Document<ITicket>
	beforeAll(() => {
		newTicket = new Ticket({seat:1});
		console.log(newTicket)
	})
	describe('Ticket Properties', () => {
		test('_id Property Should Exist', () => {
			expect(newTicket).toHaveProperty('_id');
		})
		test('seat Property Should Be the Number 1', () =>{
			expect(newTicket).toHaveProperty('seat', 1);
		})
		test.todo('flight Property Should Exist, Referencing A Flight ID');
		test.todo('ticketHolder should be a Property, referencing a User');
	})
	describe('Ticket Validation', () => {
		let badTicket: Document<ITicket>
		let badTicketValidation: Error.ValidationError | null
		beforeAll(() => {
			badTicket = new Ticket({})
			badTicketValidation = badTicket.validateSync();
			console.log(badTicketValidation)
		})
		describe('Seat Property Requirement', () => {
			test('Ticket Seat Property Is Required, Should Return a Validation Error', () => {
				expect(badTicketValidation).toBeInstanceOf(Error.ValidationError)
				expect(badTicketValidation).not.toBe(null)
			})
			test('When A Validation Error Is Thrown, Return the Message: "Seat Is Required"', () => {
				const expected = {
					seat: expect.objectContaining({
						properties: expect.objectContaining({ message: 'Seat Is Required', type: 'required', path: 'seat' }
						),
						kind: 'required',
						path: 'seat'
					})

				};
				expect(badTicketValidation).toHaveProperty('errors', expect.objectContaining(expected));
			})
		})
		describe('Flight Property Requirement', () => {
			test.todo('Ticket Flight Property Is Required, Should Return a Validation Error')
			test.todo('When A Validation Error Is Thrown, Return the Message: "Flight Is Required"')
		})
	})
})