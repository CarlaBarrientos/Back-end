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

export class CanNotJoinError extends BaseError {
	constructor() {
		super('The game is in progress you can not add more players.', HttpStatusCode.BAD_REQUEST);
	}
}

export class SameColorPlayersError extends BaseError {
	constructor() {
		super('You can not add both players of the same color!', HttpStatusCode.BAD_REQUEST);
	}
}

export class GameNotReadyError extends BaseError {
	constructor() {
		super('Game is not ready.', HttpStatusCode.BAD_REQUEST);
	}
}

export class MoveNotValidError extends BaseError {
	constructor() {
		super('Move not valid!', HttpStatusCode.BAD_REQUEST);
	}
}

export class IncorrectTurnError extends BaseError {
	constructor() {
		super('It is not your turn!', HttpStatusCode.BAD_REQUEST);
	}
}

export class MissingPieceError extends BaseError {
	constructor() {
		super('There is not any piece in the start position!', HttpStatusCode.BAD_REQUEST);
	}
}

export class InvalidMove extends BaseError {
	constructor() {
		super('Invalid move!', HttpStatusCode.BAD_REQUEST);
	}
}