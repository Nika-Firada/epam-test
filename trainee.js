try{
    console.log(car);
    let car = 'Tesla';
}
catch(err){
    console.log(err,  "let must be declared’ before use")
}



//javaScript hasnt that kind of exception, its just returns "Infinity"
try{
    let sum = 1 / 0;
    console.log(sum);
}
catch(err){
    console.log(err, "cannot be divided by zero")
}
