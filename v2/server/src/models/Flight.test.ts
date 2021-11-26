import Flight, {IFlightDoc} from './Flight';
import {v4 as uuidv4} from 'uuid';

describe('Flight Model', () => {
	describe('Flight Properties', () => {
		let newFlight: IFlightDoc
		let date = new Date(Date.now())
		let flightNum = uuidv4()
		console.log('FLIGHTNUM', flightNum)
		beforeAll(() => {
			newFlight = new Flight({
				date,
				departure: 'KEN',
				flightNum
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
		test('New Flight Should Have a flightNum property, that is the flightNum passed in', () => {
			expect(newFlight).toHaveProperty('flightNum', flightNum);
		})
		test('New Flight Should Have a getAbbreviation property', () => {
			expect(newFlight).toHaveProperty('getAbbreviation');
			expect(typeof newFlight.getAbbreviation).toBe('function');
		})
		test('When newFlight.getAbbreviation is called, a string equalling the expected value', () => {
			const expectedValue = `KEN-${flightNum.split('-')[0]}`
			const abbreviation = newFlight.getAbbreviation();
			expect(abbreviation).toBe(expectedValue);
		})
	})
})