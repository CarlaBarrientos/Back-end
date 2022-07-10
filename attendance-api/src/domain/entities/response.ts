import { HttpStatusCode } from "../httpStatusCode";

export default class Response<T> {
  private readonly responseCode: number;
  private readonly content: {
    code: string;
    message: string;
    data?: T;
  };
  constructor(
    responseCode: number,
    content: { code: string; message: string; data?: T }
  ) {
    this.responseCode = responseCode;
    this.content = content;
  }

  get statusCode(): number {
    return this.responseCode;
  }
  get responseContent() {
    return this.content;
  }

  public static ok<T>(message: string, data?: T): Response<T> {
    return new Response<T>(HttpStatusCode.OK, { code: '200', message, data });
  }

  public static created<T>(message: string, data?: T): Response<T> {
    return new Response<T>(HttpStatusCode.CREATED, { code: '201', message, data });
  }

  public static noContent<T>(message: string, data?: T): Response<T> {
    return new Response<T>(HttpStatusCode.NO_CONTENT, { code: '204', message, data });
  }

}
