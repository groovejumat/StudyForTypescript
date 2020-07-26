"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// person.ts
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
exports.Person = Person;
