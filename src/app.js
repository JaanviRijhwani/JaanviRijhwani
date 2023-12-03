import timepass from './modules/timepass';
const person = require('./modules/oldexports');
import {student, sayHello} from './modules/lib';
import * as output from './modules/lib';
let a = 25;
console.log(a);
timepass();
console.log(output.student.name);

output.sayHello("Jimmy Doe");
console.log(person);
async function getPosts(){
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));