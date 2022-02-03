import {IUser} from './interfaces/space.interface';

const user: IUser ={name: 'Max', age: 18, gender: 'male'}

function sum(a:number,b:number):number {
    return a + b
}

function showSum(a:number,b:number){
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc
    return someUser;
}

console.log(`Sum ${sum(1, 2)}`);
showSum(2,3)
incAge(user, 2)
console.log(user);
