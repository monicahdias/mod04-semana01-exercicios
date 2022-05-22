export interface User {
    name: string;
    age: number;
    occupation: string;
}

export const users: User[] = [
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

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);