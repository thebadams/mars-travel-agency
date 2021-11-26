import { Schema, model, Document, Date } from 'mongoose';
import {v4 as uuidv4} from 'uuid'

export interface IFlightDoc extends Document {
	flightNum: string;
	date: Date;
	departure: string;
	arrival: 'MARS'
	getAbbreviation: getAbbreviationFunction
};

type getAbbreviationFunction = () => string
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

flightSchema.methods.getAbbreviation = function() {
	const flight = this as IFlightDoc;
	const {flightNum, departure} = flight;
	const shortNum = flightNum.split('-')[0]
	return `${departure}-${shortNum}`
}

const Flight = model<IFlightDoc>('Flight', flightSchema);

export default Flight;