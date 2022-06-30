import { HttpStatusCode } from "./httpStatusCode";

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

export class AttendanceNotFoundError extends BaseError {
	constructor() {
		super('Attendance not found.', HttpStatusCode.NOT_FOUND);
	}
}

export class AttendanceNotValid extends BaseError {
	constructor() {
		super('Fields can not be empty.', HttpStatusCode.BAD_REQUEST);
	}
}