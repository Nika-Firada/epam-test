// class Animal{
//     move = 'moving'
// }
// const cat = new Animal();
// console.log(cat.move)
/////////////////////////////////////////////////////////
class Animal{
    move() {
        console.log(`i'm moving`);
    }
}

class Cat extends Animal{

}
let pussy = new Cat();
pussy.move();
//////////////////// without classes.. like spread method?

const animal = {name:'kot'}
animal.move = "I'm moving";
const cat = {...animal}
console.log(animal)
console.log(cat)