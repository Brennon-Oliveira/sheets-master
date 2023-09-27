import { EventEmitter } from 'stream';

class Intern {
	private static instance: EventEmitter;

	public static getInstance(): EventEmitter {
		if (!Intern.instance) {
			Intern.instance = new EventEmitter();
		}
		return Intern.instance;
	}
}

export default Intern;
