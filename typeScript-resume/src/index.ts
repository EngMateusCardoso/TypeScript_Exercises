// This file is part of the TypeScript Playground project.

// How declare TypeScript variables
let k = 10;
const y = 20;
const x: number = 30;
let z: number = 40;

// Inference x annotation
let a = 100; // inferencia
let b: number = 200; // annotation

// primitives types
let c: number = 10;
let d: string = 'TypeScript';
let e: boolean = true;
let f: any = 10;
let g: any = 'TypeScript';
let h: any = true;

// Type arrays // I can use const ou let
let i: number[] = [1, 2, 3];
let j: string[] = ['TypeScript', 'JavaScript', 'Java'];
let l: any[] = [1, 'TypeScript', true];
// console.log(i);
// console.log(j.length);
// console.log(j[2]);
// Type tuplas

let m: [number, string, boolean] = [1, 'TypeScript', true];

// Objects literals
let n: { nome: string, idade: number } = {
    nome: 'TypeScript',
    idade: 10
};
// console.log(n.nome);
// console.log(n.idade);

// union types
let id: number | string;
id = 10;
id = '10';

// Type alias // create a new type
type idType = number | string;
let id2: idType;
id2 = 10;
id2 = '10';

// Type enum
enum Colors {
    R = 'Red',
    G = 'Green',
    B = 'Blue'
}

const camisa = {
    name: 'Camisa polo',
    color: Colors.R
}
// console.log(camisa);
// console.log(camisa.color);

// literal types // o tupo é um valor
let o: 'TypeScript' | null = 'TypeScript';
o = null;
o = 'TypeScript';
// o = 'JavaScript'; // error

// FUNCTIONS
function sum(a: number, b: number): number {
    return a + b;
}
// console.log(sum(10, 20));
function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

// return void
function print(): void {
    console.log('TypeScript');
}

// optional parameters
function sum2(a: number, b?: number): number {
    return b ? a + b : a;
}
// console.log(sum2(10));
// console.log(sum2(10, 20));

// default parameters
function sum3(a: number, b: number = 10): number {
    return a + b;
}
// console.log(sum3(10));
// console.log(sum3(10, 20));

// rest parameters
function sum4(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
// console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function overload
function sum5(a: number, b: number): number;
function sum5(a: string, b: string): string;
function sum5(a: any, b: any): any {
    return a + b;
}
// console.log(sum5(10, 20));
// console.log(sum5('Type', 'Script'));

// interfaces
interface Person {
    name: string;
    age: number;
    sayHello(): string;
}

const person: Person = {
    name: 'TypeScript',
    age: 10,
    sayHello() {
        return `Hello ${this.name}`;
    }  
}

interface MathFunctionParams {
    a: number;
    b: number;
}

function sum6(params: MathFunctionParams): number{
    return params.a + params.b;
}
function mult(params: MathFunctionParams): number{
    return params.a * params.b;
}
function sub(params: MathFunctionParams): number{
    return params.a - params.b;
}
function div(params: MathFunctionParams): number{
    return params.a / params.b;
}

//narrowing
function sum7(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
sum7(10, 20);
sum7('Type', 'Script');

// generics
function showArray<T>(args: T[]): void {
    args.forEach((arg) => console.log(arg));
}

// Classes
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Person('TypeScript', 10);
// console.log(p.sayHello());

class User {
    name
    role
    isAproved

    constructor(name:  string, role: string, isAproved: boolean) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }

    showUserName() {
        return `Hello ${this.name}`;
    }
    showUserRole(canShow: boolean) {
        return canShow ? `Hello ${this.role}` : 'Hello';
    }
}

const zé = new User('TypeScript', 'Developer', true);
// console.log(zé);

// class interface
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Vehicle implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand() {
        console.log("The brand is " + this.brand);
    }
}

const car = new Vehicle('Toyota', 4);

//herança
class Car extends Vehicle {
    doors;

    constructor(brand: string, wheels: number, doors: number) {
        super(brand, wheels);
        this.doors = doors;
    }
}

const car2 = new Car('Audi', 4, 4);

// Constructor decorators
function BaseParameters() {
    // All decorator must return a function that receives a constructor
    // and returns a new constructor
    // Generic type T extends a new constructor
    // that receives any number of arguments and returns an object
    return function<T extends { new(...args: any[]): {} }>(constructor: T) {
        // return a new constructor
        return class extends constructor {
            // add new properties
            id = Math.random;
            createdAt = new Date;
            // add new methods
        }
    }
}

// decorator implementation
@BaseParameters()
class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}

const student = new Student('Mateus', 23);
