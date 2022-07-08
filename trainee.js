//  1
function iterateArr(){
    const movies = ["movie-1", "movie-2", "movie-3"];
    for (let index = 0; index < movies.length; ++index) {
        const element = movies[index];
        console.log(element);
    }
    //forEach
    console.log('forEach')
    movies.forEach((movie) => {
        console.log(movie);
    });
    //for of
    console.log('for of')
    for(const movie of movies){
        console.log(movie);
    }
}
iterateArr();

//    2
console.log('Test 2')
function arrayToStringAndBack(){
    let cars = ['Tesla', 'Toyota', 'Mazda'];
    let carsT = cars.toString();
    console.log(carsT);
    let carsBack = carsT.split(',')
    console.log(carsBack);
}
arrayToStringAndBack();

//  3
console.log('Test 3')
function addHello(){
    const friends = ['Dato', 'Lasha', 'Gio']
    friends.forEach((friend)=>{
        console.log(`Hello ${friend}`)
    })
}
addHello();

/// 4
console.log('Test 4')
function changeBool(){
    const numeric = [1, 0, 3, 0];
    numeric.forEach(bool =>{
        console.log(Boolean(bool));
    })
}
changeBool();

// 5
console.log('Test 5')
function sortArr(){
    const arr = [1,6,7,8,3,4,5,6];
    arr.sort((a,b)=>{
        return b-a;
    })
    console.log(arr)
}
sortArr();

// 6 
console.log('Test 6')
function filterArr(){
    const arr = [1,6,7,8,3,4,5,6]
    const filtered = arr.filter(num => num > 3);
    console.log(filtered)
}
filterArr();

// 7 
console.log('Test 7')
const arr00 = [1, 2, 3, 4, 5, 6];
function indexArr00(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            console.log(`index is ${i}`)
        }
    }
}
indexArr00(arr00, 1);

// 8
console.log('Test 8')
for(let i = 0; i < 10; i++){
    console.log(i)
}
//9
console.log('Test 9')
function primeNumbersLoop(min, max){
    for (let i = min; i <= max; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
primeNumbersLoop(13, 23)
//10
console.log('test 10')
function isOdd(number) {
    if (number % 2 === 0) {
        return false;
    }
    return true;
}
console.log(isOdd(7));