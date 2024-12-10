export class LibError extends Error {
	constructor(public message: string, public options?: ErrorOptions) {
		super(message, options);
	}
}