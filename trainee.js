let num = 5;
let str = 'hello';
let bool = false;
console.log(str + bool, str + num, num + bool, str*bool, str*num, num*bool, str/bool, str/num, num/bool);

let convert1 = String(num);
let convert2 = String(bool);
let convert3 = Number(str);
let convert4 = Number(bool);
let convert5 = Boolean(str);
let convert6 = Boolean(num);
console.log(convert1, convert2, convert3, convert4, convert5, convert6);

///// functions & objects

const car = {
    color: 'black',
    enginePower: '300 horsepower',
    property(){
        console.log(this.enginePower);
    }
};
car.color = 'green';
console.log(car)


function warehouse(pears, apples){
    return pears + apples
}
const warehouse1 = (pears,apples) => {
    return pears+apples
}
console.log(warehouse(5,4), warehouse1(2,2));

function terminal(name){
    const myName = 'Nika';
    if(name === myName){
        console.log(`Hello ${name}`);
    }else{
        console.log('then there is no such name')
    }
}
terminal('Nika');
terminal('idk what');

function variableType(variable){
    console.log(typeof variable);
}
variableType(false);


function isPrimeOrNot(number){
    let isPrime = true;
    if (number <= 1) {
        console.log("1 and negative numbers is neither prime nor composite number.");
    }

    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
}
isPrimeOrNot(2);