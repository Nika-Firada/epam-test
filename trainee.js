// class Animal{
//     move = 'moving'
// }
// const cat = new Animal();
// console.log(cat.move)
class Animal{
    move() {
        console.log(`i'm moving`);
    }
}

class Cat extends Animal{

}
let pussy = new Cat();
pussy.move();
