// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (request, response) => {
//     response.send('Hello World!');
// });

// app.listen(port, () => console.log(`server listening on ${port}`));
//Named function
// function greet(name: string){
//     return 'hello' + name;
// }
// //Expression function
// let greet1 = function(name: string){
//     return 'hello' + name;
// }
// //Arrow function
// let greet2 = (name: string) => {
//     return 'hello' + name;
// }
// //Shorthand function
// let greet3 = (name: string) => 'hello' + name;
// //Function constructor No recomendada
// let greet4 = new Function('name', 'return "Hello" + name;');

// function log(message: string, userId = 'Not signed in'){//userId?: string){
//     console.log(message, userId);// || 'Not signed in');
// }
// //log('User signed in', '123');
// //log('User signed in');

// //Rest parameters
// function sum(numbers: number[]): number{
//     return numbers.reduce((total, n) => total + n, 0);
// }
// sum([1, 3, 2]);

// function sumVariadic(): number {
//     return Array.from(arguments)
//     .reduce((total, n) => total + n, 0);
// }

// //sumVariadic(1, 2, 3, 4);
// //Rest parameters
// function sumVariadicSafe(...numbers: number[]): number{
//     return numbers.reduce((total, n) => total + n, 0);
// }
// sumVariadicSafe(1, 2, 3, 4);

// //call, bind, apply
// function add(a:number, b: number){
//     return a + b;
// }
// add(10, 20);
// add.apply(null, [10, 20]);
// add.call(null, 10, 20);
// add.bind(null, 10, 20)();

// //aplicación parcial
// let newAdd = add.bind(null, 10);
// newAdd(4);
// //rest parameters
// function concatenate (...str: string[] ) {
//     return str.join( ' ' );
// };

// let concatenateBind = concatenate.bind( null, 'Hello', 'world' );
// concatenateBind( 'TypeScript', '!!!');
// //sobre escritura de objetos
// let strHelper = {
//     separator: '-',
 
//     concatenate1: function ( ...str: string[] ) {
//         return str.join( this.separator );
//     }
// };
// strHelper.concatenate1( 'Hello', 'World' );
// const newSeparator = {
//     separator: '_'
// };
 
// let concatenate2 = strHelper.concatenate1.bind( newSeparator );
// concatenate2( 'Hello', 'world');

// //THIS
// let x = {
//     a(){
//         return this;
//     }
// }

// x.a();
// console.log(x.a());

// let a = x.a;
// a();
// console.log(a());

// function fancyDate(this: Date){
//     return `${this.getDay()} / ${this.getMonth()} / ${this.getFullYear()}`;
// }
// fancyDate.call(new Date);

// //Generators
// function* createNumbers(){
//     let n = 0;
//     while(true){
//         yield n++;//donde está la función retorna lo que le pasemos
//     }
// }
// let numbers = createNumbers();
// numbers.next();
// numbers.next();
// numbers.next();

// function* fibonacciGenerator(){
//     let prev:number = 0;
//     let current:number = 1;
//     let next: number;
//     while(true){
//         next=prev+current;
//         prev=current;
//         current=next;
//         yield next;

//     }
// }

// let number = fibonacciGenerator();
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// //Iterators
// let numbers = {
//     *[Symbol.iterator]() {
//         for(let n = 1; n<=10;n++){
//             yield n;
//         }
//     }
// }

// console.log(numbers);

// for(let a of numbers){
//     console.log(a);
// }
// //spread an iterator
// let allNumbers = [...numbers];//cómo si estaríamos ejecutando todo el iterable de una
// //destructure an iterator
// let [one, two, ...rest] = numbers;//[number, number, [number]]

// //Call Signatures, tipos de las funciones

// function sum(a:number, b:number): number {
//     return a+b;
// }
// //short hand
// type myFun = (a: number, b:number)=>number;//esta llegaría a ser la firma de la función anterior
// //estamos almacenando y tipo de función
// //short hand
// type Log = (message: string, userId?: string) => void;
// //long hand
// type Log2 = {
//     (message: string, userId?: string): void;
// }
// //en sobrecarga de funciones usamos esto bastante
// //sobrecarga de funciones: una función con múltiples call signatures

//Overloaded functions
// class Reservation {
//     constructor(){

//     }
// }

// type Reserve ={
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination: string): Reservation
// }//tipo de la función

// let reserve: Reserve = (from: Date, to: Date |string, destination?: string) => {
//     return new Reservation();
// }//creamos la función

// let myReservation = reserve(new Date, new Date, 'EEUU');//llamamos a la función
// let myReservation2 = reserve(new Date, 'EEUU');//sobrecarga, mismo nombre diferente tipo de parámetros

function sumSqrt(numbers: number[]): number{
    return numbers.reduce((total, n) => total + Math.pow(n, 2), 0);
}

console.log(sumSqrt([0,1,2,3,4]));