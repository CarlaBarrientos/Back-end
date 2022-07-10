import { HttpStatusCode } from "../../domain/httpStatusCode";

export class BaseError extends Error {
	message!: string;
	httpCode!: number;

	constructor(message: string, httpCode: HttpStatusCode) {
		super();
		this.message = message;
		this.httpCode = httpCode;
   		Object.setPrototypeOf(this, new.target.prototype);
		Error.captureStackTrace(this);
	}
}

export class UserNotFoundError extends BaseError {
	constructor() {
		super('User not found.', HttpStatusCode.NOT_FOUND);
	}
}

export class NotEmptyField extends BaseError {
	constructor(field: string) {
		super(`${field} field can not be empty.`, HttpStatusCode.BAD_REQUEST);
	}
}