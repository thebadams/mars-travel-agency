import Flight, {IFlightDoc} from './Flight';

describe('Flight Model', () => {
	describe('Flight Properties', () => {
		let newFlight: IFlightDoc
		let date = new Date(Date.now())
		beforeAll(() => {
			newFlight = new Flight({
				date,
				departure: 'KEN'
			})
		})
		test('Flight Should Have an _id Property', () => {
			expect(newFlight).toHaveProperty('_id');
		})
		test('Flight Should {Have A Date Property Equal to the Date Initialized', () => {
			expect(newFlight).toHaveProperty('date', date);
		});
		test('Flight Should Have A departure property equal to the string "KEN"', () => {
			expect(newFlight).toHaveProperty('departure', 'KEN');
		});
		test('New Flight Should Have An arrival property, equal to the string "MARS"', () => {
			expect(newFlight).toHaveProperty('arrival', 'MARS');
		})
	})
})