import { LibError } from './LibError';
import { ErrorData } from './ErrorData';

export class HttpError extends LibError {	
	public status: number;
	public payload: object;
	
	constructor(data: ErrorData) {
		super(data.message, { cause: data.cause });

		this.status = data.status;
		this.payload = data.payload;
	}

}