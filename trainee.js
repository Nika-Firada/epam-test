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

// but there was 1 solution
function throwError0(a,b) {
    let r = a / b;
    if (Number.isFinite(r)) return r;
    throw new Error('Divide Error');
  }
  
  try {
    let a = 10;
    let b = 0;
    let c = throwError0(a, b);
    console.log(c);
  } catch (err) {
    console.log(err, 'cannot be divided by zero');
  }
