// const person = {
//     name: 'john',
//     age: 30
// };
class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name ${this.name} and i am ${this.age}`);
    }
}
module.exports= Person;