import {Schema, model} from 'mongoose';

export interface ITicket {
	seat: number
}

const ticketSchema = new Schema <ITicket>({
	seat: {
		type: Number,
		required: [true, 'Seat Is Required']
	}
})

const Ticket = model<ITicket>('Ticket', ticketSchema);

export default Ticket;
