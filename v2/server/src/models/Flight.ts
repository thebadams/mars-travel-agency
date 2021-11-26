import { Schema, model, Document, Date } from 'mongoose';
import {v4 as uuidv4} from 'uuid'

interface IFlightDoc extends Document {
	flightNum: string;
	date: Date;
	departure: string;
	arrival: 'MARS'
};

const flightSchema = new Schema<IFlightDoc>({
	flightNum: {
		type:String,
		default: uuidv4()
	
	},
	date: Date,
	departure: String,
	arrival: {
		type: String,
		default: 'MARS'
	}

})

// flightSchema.methods.getAbbreviation = function() {
// 	const flight = this as IFlightDoc;
// 	const abbreviation = flight.departure.split('-')[0].trim().split(' ').map(el => el.charAt(0).join(''))

// 	return abbreviation;
// }

const Flight = model<IFlightDoc>('Flight', flightSchema);

export default Flight;