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
	})
})