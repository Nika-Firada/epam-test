// 3. Get the day, month and year of the current date and output it to the console separately
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);

//2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const stringTest = '2 + 3 223 2223';
const findReg = /2 \+ 3/;
console.log(stringTest.match(findReg))

//1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const st = 'ahb acb aeb aeeb adcb axeb';
const regex2 = /a.b/gi;
console.log(st.match(regex2))
