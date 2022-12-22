"use strict";
// This file is part of the TypeScript Playground project.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// How declare TypeScript variables
let k = 10;
const y = 20;
const x = 30;
let z = 40;
// Inference x annotation
let a = 100; // inferencia
let b = 200; // annotation
// primitives types
let c = 10;
let d = 'TypeScript';
let e = true;
let f = 10;
let g = 'TypeScript';
let h = true;
// Type arrays // I can use const ou let
let i = [1, 2, 3];
let j = ['TypeScript', 'JavaScript', 'Java'];
let l = [1, 'TypeScript', true];
// console.log(i);
// console.log(j.length);
// console.log(j[2]);
// Type tuplas
let m = [1, 'TypeScript', true];
// Objects literals
let n = {
    nome: 'TypeScript',
    idade: 10
};
// console.log(n.nome);
// console.log(n.idade);
// union types
let id;
id = 10;
id = '10';
let id2;
id2 = 10;
id2 = '10';
// Type enum
var Colors;
(function (Colors) {
    Colors["R"] = "Red";
    Colors["G"] = "Green";
    Colors["B"] = "Blue";
})(Colors || (Colors = {}));
const camisa = {
    name: 'Camisa polo',
    color: Colors.R
};
// console.log(camisa);
// console.log(camisa.color);
// literal types // o tupo é um valor
let o = 'TypeScript';
o = null;
o = 'TypeScript';
// o = 'JavaScript'; // error
// FUNCTIONS
function sum(a, b) {
    return a + b;
}
// console.log(sum(10, 20));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
// return void
function print() {
    console.log('TypeScript');
}
// optional parameters
function sum2(a, b) {
    return b ? a + b : a;
}
// console.log(sum2(10));
// console.log(sum2(10, 20));
// default parameters
function sum3(a, b = 10) {
    return a + b;
}
// console.log(sum3(10));
// console.log(sum3(10, 20));
// rest parameters
function sum4(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
function sum5(a, b) {
    return a + b;
}
const person = {
    name: 'TypeScript',
    age: 10,
    sayHello() {
        return `Hello ${this.name}`;
    }
};
function sum6(params) {
    return params.a + params.b;
}
function mult(params) {
    return params.a * params.b;
}
function sub(params) {
    return params.a - params.b;
}
function div(params) {
    return params.a / params.b;
}
//narrowing
function sum7(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a}${b}`;
}
sum7(10, 20);
sum7('Type', 'Script');
// generics
function showArray(args) {
    args.forEach((arg) => console.log(arg));
}
// Classes
class Person {
    name;
    age;
    constructor(name, age) {
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
    name;
    role;
    isAproved;
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
    showUserName() {
        return `Hello ${this.name}`;
    }
    showUserRole(canShow) {
        return canShow ? `Hello ${this.role}` : 'Hello';
    }
}
const zé = new User('TypeScript', 'Developer', true);
class Vehicle {
    brand;
    wheels;
    constructor(brand, wheels) {
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
    constructor(brand, wheels, doors) {
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
    return function (constructor) {
        // return a new constructor
        return class extends constructor {
            // add new properties
            id = Math.random;
            createdAt = new Date;
        };
    };
}
// decorator implementation
let Student = class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
};
Student = __decorate([
    BaseParameters()
], Student);
const student = new Student('Mateus', 23);
