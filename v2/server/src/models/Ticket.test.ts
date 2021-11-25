import Ticket, {ITicket} from './Ticket';

describe('Ticket Model', () => {
	let newTicket: ITicket
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
		describe('Seat Property Requirement', () => {
			test.todo('Ticket Seat Property Is Required, Should Return a Validation Error')
			test.todo('When A Validation Error Is Thrown, Return the Message: "Seat Is Required"')
		})
		describe('Flight Property Requirement', () => {
			test.todo('Ticket Flight Property Is Required, Should Return a Validation Error')
			test.todo('When A Validation Error Is Thrown, Return the Message: "Flight Is Required"')
		})
	})
})