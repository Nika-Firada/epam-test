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
