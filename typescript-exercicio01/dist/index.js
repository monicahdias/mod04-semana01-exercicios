"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: 'John',
        age: 30,
        occupation: 'Backend Developer',
    },
    {
        name: 'Jane',
        age: 25,
        occupation: 'Frontend Developer',
    },
    {
        name: 'Jack',
        age: 35,
        occupation: 'Fullstack Developer',
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
